import { useCallback, useEffect, useState } from 'react'
import { series } from '../data/galeria'
import { useIdioma } from '../i18n/idioma'
import BarraProyecto from './BarraProyecto'
import './Proyecto.css'

// Pagina dedicada a un solo proyecto: intro (titulo, subtitulo, historia) y las
// fotos en scroll vertical. Al pulsar una foto se abre a pantalla completa.
export default function Proyecto({ id }: { id: string }) {
  const { t } = useIdioma()
  const serie = series.find((s) => s.id === id)
  const [abierta, setAbierta] = useState<number | null>(null)

  const texto = serie ? t.series[serie.id] : undefined

  useEffect(() => {
    if (!texto) return
    const previo = document.title
    document.title = `${texto.titulo} — Fabian Suspensivo`
    window.scrollTo(0, 0)
    return () => {
      document.title = previo
    }
  }, [texto])

  const total = serie ? serie.fotos.length : 0
  const cerrar = useCallback(() => setAbierta(null), [])
  const mover = useCallback(
    (paso: number) => {
      setAbierta((v) => (v === null ? v : (v + paso + total) % total))
    },
    [total],
  )

  useEffect(() => {
    if (abierta === null) return
    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cerrar()
      else if (e.key === 'ArrowRight') mover(1)
      else if (e.key === 'ArrowLeft') mover(-1)
    }
    document.addEventListener('keydown', alPulsar)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', alPulsar)
      document.body.style.overflow = ''
    }
  }, [abierta, cerrar, mover])

  if (!serie || !texto) {
    return (
      <div className="proyecto proyecto-vacio">
        <BarraProyecto />
      </div>
    )
  }

  return (
    <div className="proyecto">
      <BarraProyecto />

      <div className="proyecto-intro">
        <h1 className="proyecto-titulo">{texto.titulo}</h1>
        {texto.subtitulo ? <p className="proyecto-subtitulo">{texto.subtitulo}</p> : null}
        <p className="proyecto-nota">{texto.nota}</p>
        {texto.historia ? (
          <div className="proyecto-historia">
            {texto.historia.map((parrafo, k) => (
              <p key={k}>{parrafo}</p>
            ))}
          </div>
        ) : null}
        {texto.fuente ? (
          <p className="proyecto-fuente">
            <a href={texto.fuente.url} target="_blank" rel="noopener">
              {texto.fuente.texto}
              <span aria-hidden="true"> ↗</span>
            </a>
          </p>
        ) : null}
      </div>

      <div className="proyecto-fotos">
        {serie.fotos.map((foto, i) => (
          <button
            key={foto.src}
            type="button"
            className="proyecto-foto"
            onClick={() => setAbierta(i)}
            aria-label={texto.alt}
          >
            <img src={foto.src} alt={texto.alt} loading="lazy" width={foto.w} height={foto.h} />
          </button>
        ))}
      </div>

      {abierta !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={cerrar}>
          <button className="lb-cerrar" type="button" onClick={cerrar} aria-label="Cerrar">
            &times;
          </button>
          {total > 1 ? (
            <button
              className="lb-flecha lb-izq"
              type="button"
              aria-label={t.trabajo.anterior}
              onClick={(e) => {
                e.stopPropagation()
                mover(-1)
              }}
            >
              &lsaquo;
            </button>
          ) : null}
          <img
            className="lb-img"
            src={serie.fotos[abierta].src}
            alt={texto.alt}
            onClick={(e) => e.stopPropagation()}
          />
          {total > 1 ? (
            <button
              className="lb-flecha lb-der"
              type="button"
              aria-label={t.trabajo.siguiente}
              onClick={(e) => {
                e.stopPropagation()
                mover(1)
              }}
            >
              &rsaquo;
            </button>
          ) : null}
          <div className="lb-contador">
            {abierta + 1} <span className="sep">/</span> {total}
          </div>
        </div>
      ) : null}
    </div>
  )
}
