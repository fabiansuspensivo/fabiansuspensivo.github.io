import { series } from '../data/galeria'
import './Trabajo.css'

export default function Trabajo() {
  if (series.length === 0) return null
  return (
    <section className="seccion" id="trabajo">
      <div className="contenedor">
        <h2 className="titulo-seccion">Trabajo</h2>
        {series.map((serie) => (
          <article className="serie" key={serie.id}>
            <header className="serie-cabecera">
              <h3 className="serie-titulo">{serie.titulo}</h3>
              <p className="meta">{serie.nota}</p>
            </header>
            <div className="serie-fotos">
              {serie.fotos.map((foto) => (
                <img
                  key={foto.src}
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
