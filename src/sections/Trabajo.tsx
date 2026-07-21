import { useCallback, useEffect, useRef, useState } from 'react'
import { series, type Serie } from '../data/galeria'
import { useIdioma } from '../i18n/idioma'
import type { SerieTexto, Textos } from '../i18n/textos'
import './Trabajo.css'

// Visor de una serie: una foto a la vez sobre un paspartu de margen uniforme.
// La transicion es de galeria: la foto actual se funde hacia el paspartu y la
// siguiente se revela SOLO cuando ya esta decodificada, asi nunca aparece a
// medio cargar ni pega saltos. Las fotos vecinas se precargan en silencio, de
// modo que pasar de una a otra es instantaneo. Si una imagen tarda de verdad
// (primera visita, salto rapido) se muestra un esqueleto con el mismo encuadre,
// sin mover el layout.
const SALIDA = 240 // ms del fundido de salida antes de cambiar de foto

function Visor({ serie, texto, t }: { serie: Serie; texto: SerieTexto; t: Textos }) {
  const largo = serie.fotos.length
  const [i, setI] = useState(0)
  const [visible, setVisible] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [hover, setHover] = useState(false)
  const animando = useRef(false)
  const cargadas = useRef<Set<string>>(new Set())
  const timers = useRef<number[]>([])
  const reduce = useRef(false)

  const norm = (idx: number) => ((idx % largo) + largo) % largo

  const precargar = useCallback(
    (idx: number) => {
      const src = serie.fotos[norm(idx)].src
      if (cargadas.current.has(src)) return
      const im = new Image()
      im.src = src
      const ok = () => cargadas.current.add(src)
      if (im.decode) im.decode().then(ok).catch(() => {})
      else im.onload = ok
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [serie, largo],
  )

  // Decodifica la foto destino (esqueleto solo si tarda), la funde hacia adentro
  // y precarga las vecinas.
  const revelar = useCallback(
    async (idx: number) => {
      const src = serie.fotos[idx].src
      if (!cargadas.current.has(src)) {
        const tskel = window.setTimeout(() => setCargando(true), 100)
        timers.current.push(tskel)
        const im = new Image()
        im.src = src
        try {
          if (im.decode) await im.decode()
        } catch {
          /* imagen rota: seguimos sin bloquear el visor */
        }
        window.clearTimeout(tskel)
        cargadas.current.add(src)
      }
      setCargando(false)
      // dos frames para asegurar que la <img> ya pinto en opacidad 0 antes de encenderla
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
      precargar(idx + 1)
      precargar(idx - 1)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [serie],
  )

  const irA = useCallback(
    (next: number) => {
      if (animando.current || next === i) return
      animando.current = true
      setVisible(false) // funde la actual hacia el paspartu
      const espera = reduce.current ? 0 : SALIDA
      const tt = window.setTimeout(async () => {
        setI(next)
        await revelar(next)
        animando.current = false
      }, espera)
      timers.current.push(tt)
    },
    [i, revelar],
  )

  const mover = (dir: number) => irA(norm(i + dir))

  // primera foto + limpieza de timers al desmontar
  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    revelar(0)
    const t = timers.current
    return () => t.forEach((x) => window.clearTimeout(x))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // flechas del teclado cuando el cursor esta sobre el visor
  useEffect(() => {
    if (!hover) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') mover(1)
      if (e.key === 'ArrowLeft') mover(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const foto = serie.fotos[i]

  return (
    <div className="visor">
      <div
        className="visor-marco"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="visor-lienzo">
          <img
            className={`visor-img${visible ? ' visible' : ''}`}
            src={foto.src}
            alt={texto.alt}
            width={foto.w}
            height={foto.h}
            draggable={false}
          />
          <span
            className={`visor-esqueleto${cargando ? ' activo' : ''}`}
            aria-hidden="true"
          />
        </div>

        <button
          type="button"
          className="visor-zona izq"
          aria-label={t.trabajo.anterior}
          onClick={() => mover(-1)}
        >
          <span className="visor-flecha">&lsaquo;</span>
        </button>
        <button
          type="button"
          className="visor-zona der"
          aria-label={t.trabajo.siguiente}
          onClick={() => mover(1)}
        >
          <span className="visor-flecha">&rsaquo;</span>
        </button>

        <span className="visor-contador">
          {String(i + 1).padStart(2, '0')}
          <span className="sep"> / </span>
          {String(largo).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

// Boton de compartir un proyecto: en el movil abre el menu nativo del sistema
// (mensajes, WhatsApp...); en el escritorio copia el enlace directo al proyecto.
function Compartir({ serie, t }: { serie: Serie; t: Textos }) {
  const [copiado, setCopiado] = useState(false)
  const compartir = useCallback(async () => {
    const url = `${window.location.origin}/#/p/${serie.id}`
    if (navigator.share) {
      try {
        await navigator.share({ url, title: 'Fabian Suspensivo' })
        return
      } catch {
        return
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopiado(true)
      window.setTimeout(() => setCopiado(false), 2000)
    } catch {
      /* sin portapapeles disponible */
    }
  }, [serie])
  return (
    <button type="button" className="serie-compartir" onClick={compartir}>
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="M8.6 13.4l6.8 3.9M15.4 6.7l-6.8 3.9" strokeLinecap="round" />
        <circle cx="18" cy="5.2" r="2.6" />
        <circle cx="6" cy="12" r="2.6" />
        <circle cx="18" cy="18.8" r="2.6" />
      </svg>
      {copiado ? t.trabajo.copiado : t.trabajo.compartir}
    </button>
  )
}

export default function Trabajo() {
  const { t } = useIdioma()

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

  // enlace directo a un proyecto: al abrir la web con #<proyecto> saltamos a el
  // una vez montado (la web se dibuja en el navegador, asi que esperamos al render)
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id || !series.some((s) => s.id === id)) return
    const j = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView()
    }, 80)
    return () => window.clearTimeout(j)
  }, [])

  if (series.length === 0) return null

  return (
    <section className="seccion" id="trabajo">
      <div className="contenedor">
        <h2 className="titulo-seccion">{t.trabajo.titulo}</h2>
        {series
          .filter((serie) => !serie.oculto)
          .map((serie) => {
            const texto = t.series[serie.id]
          return (
            <article
              id={serie.id}
              className={texto.destacada ? 'serie revelar serie-destacada' : 'serie revelar'}
              key={serie.id}
            >
              <header className="serie-cabecera">
                <h3 className="serie-titulo">
                  <a
                    className="serie-enlace"
                    href={`/#/p/${serie.id}`}
                    target="_blank"
                    rel="noopener"
                  >
                    {texto.titulo}
                    <span className="serie-enlace-flecha" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </h3>
                {texto.subtitulo ? <p className="serie-subtitulo">{texto.subtitulo}</p> : null}
                <p className="meta">{texto.nota}</p>
              </header>
              <Visor serie={serie} texto={texto} t={t} />
              {texto.resumen ? (
                <div className="serie-resumen">
                  <p>{texto.resumen}</p>
                  <a
                    className="serie-vermas"
                    href={`/#/p/${serie.id}`}
                    target="_blank"
                    rel="noopener"
                  >
                    {t.trabajo.verProyecto}
                    <span className="serie-enlace-flecha" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>
              ) : null}
              <div className="serie-pie">
                <Compartir serie={serie} t={t} />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
