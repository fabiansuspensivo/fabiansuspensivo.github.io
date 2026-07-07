import { useEffect, useRef, useState } from 'react'
import { series } from '../data/galeria'
import { useIdioma } from '../i18n/idioma'
import './Trabajo.css'

// Visor de una foto a la vez por serie: las fotos pasan de una en una con un
// fundido, en vez de una cuadricula con scroll. Inspirado en la sobriedad
// editorial de las agencias de foto (la imagen manda, el resto se aparta).
export default function Trabajo() {
  const { t } = useIdioma()
  const [indices, setIndices] = useState<Record<string, number>>({})
  const activa = useRef<string | null>(null)

  const mover = (id: string, largo: number, dir: number) =>
    setIndices((prev) => ({
      ...prev,
      [id]: ((prev[id] ?? 0) + dir + largo) % largo,
    }))

  // flechas del teclado mueven la serie sobre la que esta el cursor
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const id = activa.current
      if (!id) return
      const serie = series.find((s) => s.id === id)
      if (!serie) return
      if (e.key === 'ArrowRight') mover(id, serie.fotos.length, 1)
      if (e.key === 'ArrowLeft') mover(id, serie.fotos.length, -1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // aparicion sutil de cada serie al entrar en pantalla
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.05 },
    )
    document.querySelectorAll('.serie').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  if (series.length === 0) return null

  return (
    <section className="seccion" id="trabajo">
      <div className="contenedor">
        <h2 className="titulo-seccion">{t.trabajo.titulo}</h2>
        {series.map((serie) => {
          const texto = t.series[serie.id]
          const largo = serie.fotos.length
          const i = indices[serie.id] ?? 0
          const foto = serie.fotos[i]
          return (
            <article
              className="serie revelar"
              key={serie.id}
              onMouseEnter={() => (activa.current = serie.id)}
              onMouseLeave={() => {
                if (activa.current === serie.id) activa.current = null
              }}
            >
              <header className="serie-cabecera">
                <h3 className="serie-titulo">{texto.titulo}</h3>
                <p className="meta">{texto.nota}</p>
              </header>

              <div className="visor">
                <div className="visor-marco">
                  <img
                    key={foto.src}
                    className="visor-img"
                    src={foto.src}
                    alt={texto.alt}
                    width={foto.w}
                    height={foto.h}
                  />
                  <button
                    type="button"
                    className="visor-zona izq"
                    aria-label={t.trabajo.anterior}
                    onClick={() => mover(serie.id, largo, -1)}
                  />
                  <button
                    type="button"
                    className="visor-zona der"
                    aria-label={t.trabajo.siguiente}
                    onClick={() => mover(serie.id, largo, 1)}
                  />
                </div>

                <div className="visor-pie">
                  <div className="visor-flechas">
                    <button
                      type="button"
                      className="visor-flecha"
                      aria-label={t.trabajo.anterior}
                      onClick={() => mover(serie.id, largo, -1)}
                    >
                      &lsaquo;
                    </button>
                    <button
                      type="button"
                      className="visor-flecha"
                      aria-label={t.trabajo.siguiente}
                      onClick={() => mover(serie.id, largo, 1)}
                    >
                      &rsaquo;
                    </button>
                  </div>
                  <span className="visor-contador">
                    {String(i + 1).padStart(2, '0')}
                    <span className="sep"> / </span>
                    {String(largo).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
