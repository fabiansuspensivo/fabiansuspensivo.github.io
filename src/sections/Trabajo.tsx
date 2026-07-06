import { useEffect, useState } from 'react'
import { series, type Foto } from '../data/galeria'
import { useIdioma } from '../i18n/idioma'
import './Trabajo.css'

// muestra corta por serie; la serie completa se abre solo si el visitante lo pide
const MUESTRA = 4

// filas justificadas de a 2: el ancho se reparte segun la proporcion de cada
// foto, con lo que ambas quedan exactamente a la misma altura sin recortarse
function enFilas(fotos: Foto[]): Foto[][] {
  const filas: Foto[][] = []
  for (let i = 0; i < fotos.length; i += 2) {
    filas.push(fotos.slice(i, i + 2))
  }
  return filas
}

export default function Trabajo() {
  const { t } = useIdioma()
  const [abiertas, setAbiertas] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observador.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.05 },
    )
    document.querySelectorAll('.revelar').forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  }, [abiertas])

  if (series.length === 0) return null

  return (
    <section className="seccion" id="trabajo">
      <div className="contenedor">
        <h2 className="titulo-seccion">{t.trabajo.titulo}</h2>
        {series.map((serie) => {
          const texto = t.series[serie.id]
          const abierta = !!abiertas[serie.id]
          const visibles = abierta ? serie.fotos : serie.fotos.slice(0, MUESTRA)
          const hayMas = serie.fotos.length > MUESTRA
          return (
            <article className="serie" key={serie.id}>
              <header className="serie-cabecera">
                <h3 className="serie-titulo">{texto.titulo}</h3>
                <p className="meta">{texto.nota}</p>
              </header>
              <div className="serie-fotos">
                {enFilas(visibles).map((fila) => (
                  <div className="fila" key={fila[0].src}>
                    {fila.map((foto) => (
                      <figure
                        key={foto.src}
                        className="foto revelar"
                        style={{
                          flex: `${foto.w / foto.h} 1 0%`,
                          aspectRatio: `${foto.w} / ${foto.h}`,
                        }}
                      >
                        <img
                          src={foto.src}
                          alt={texto.alt}
                          width={foto.w}
                          height={foto.h}
                          loading="lazy"
                        />
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
              {hayMas && (
                <button
                  type="button"
                  className="serie-boton"
                  onClick={() =>
                    setAbiertas((prev) => ({ ...prev, [serie.id]: !abierta }))
                  }
                >
                  {abierta
                    ? t.trabajo.verMenos
                    : t.trabajo.verMas.replace('{n}', String(serie.fotos.length))}
                </button>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
