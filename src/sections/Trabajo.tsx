import { useEffect, useState } from 'react'
import { series, type Serie } from '../data/galeria'
import { useIdioma } from '../i18n/idioma'
import type { SerieTexto, Textos } from '../i18n/textos'
import './Trabajo.css'

// Visor de una serie: una foto a la vez. El fondo oscuro es un paspartu de
// margen uniforme (mismo borde en todos los lados, igual para horizontales y
// verticales), asi todas se ven parejas. Navegacion manual, con fundido.
function Visor({ serie, texto, t }: { serie: Serie; texto: SerieTexto; t: Textos }) {
  const largo = serie.fotos.length
  const [i, setI] = useState(0)
  const [hover, setHover] = useState(false)

  const mover = (dir: number) => setI((prev) => (prev + dir + largo) % largo)

  // flechas del teclado cuando el cursor esta sobre esta serie
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
        <img
          key={i}
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

  if (series.length === 0) return null

  return (
    <section className="seccion" id="trabajo">
      <div className="contenedor">
        <h2 className="titulo-seccion">{t.trabajo.titulo}</h2>
        {series.map((serie) => {
          const texto = t.series[serie.id]
          return (
            <article className="serie revelar" key={serie.id}>
              <header className="serie-cabecera">
                <h3 className="serie-titulo">{texto.titulo}</h3>
                <p className="meta">{texto.nota}</p>
              </header>
              <Visor serie={serie} texto={texto} t={t} />
            </article>
          )
        })}
      </div>
    </section>
  )
}
