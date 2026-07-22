import { series } from '../data/galeria'
import { useIdioma } from '../i18n/idioma'
import './Proyectos.css'

// Apartado de obra de autor. A diferencia de Trabajo, aqui no hay visor: cada
// proyecto se presenta con su foto de portada y su texto, y el enlace lleva a
// la pagina completa del proyecto.
export default function Proyectos() {
  const { t } = useIdioma()
  const proyectos = series.filter((s) => s.proyecto)
  if (proyectos.length === 0) return null

  return (
    <section className="seccion" id="proyectos">
      <div className="contenedor">
        <h2 className="titulo-seccion">{t.proyectos.titulo}</h2>
        <p className="proyectos-intro">{t.proyectos.intro}</p>

        {proyectos.map((serie) => {
          const texto = t.series[serie.id]
          const portada = serie.fotos[0]
          return (
            <article className="lista-proy" id={`proy-${serie.id}`} key={serie.id}>
              <a className="lista-proy-portada" href={`/#/p/${serie.id}`}>
                <img
                  src={portada.src}
                  alt={texto.alt}
                  width={portada.w}
                  height={portada.h}
                  loading="lazy"
                />
              </a>
              <div className="lista-proy-texto">
                <h3 className="lista-proy-titulo">
                  <a href={`/#/p/${serie.id}`}>{texto.titulo}</a>
                </h3>
                {texto.subtitulo ? <p className="lista-proy-fecha">{texto.subtitulo}</p> : null}
                <p className="lista-proy-resumen">{texto.resumen ?? texto.nota}</p>
                <a className="lista-proy-ver" href={`/#/p/${serie.id}`}>
                  {t.proyectos.ver}
                  <span className="serie-enlace-flecha" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
