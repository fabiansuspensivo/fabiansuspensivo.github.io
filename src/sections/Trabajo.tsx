import { useState } from 'react'
import { series } from '../data/galeria'
import { useIdioma } from '../i18n/idioma'
import './Trabajo.css'

// muestra corta por serie; la serie completa se abre solo si el visitante lo pide
const MUESTRA = 4

export default function Trabajo() {
  const { t } = useIdioma()
  const [abiertas, setAbiertas] = useState<Record<string, boolean>>({})
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
                <h3 className="serie-titulo">{texto?.titulo ?? serie.titulo}</h3>
                <p className="meta">{texto?.nota ?? serie.nota}</p>
              </header>
              <div className="serie-fotos">
                {visibles.map((foto) => (
                  <img
                    key={foto.src}
                    src={foto.src}
                    alt={texto?.alt ?? foto.alt}
                    loading="lazy"
                  />
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
