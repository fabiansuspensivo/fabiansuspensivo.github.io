import { series } from '../data/galeria'
import { useIdioma } from '../i18n/idioma'
import BarraProyecto from './BarraProyecto'
import './Proyectos.css'

// Pagina propia de obra de autor (#/proyectos). No vive en la portada: se llega
// desde la pestaña Proyectos y desde aqui se entra a cada proyecto.
export default function Proyectos() {
  const { t } = useIdioma()
  const proyectos = series.filter((s) => s.proyecto)

  return (
    <div className="proyecto">
      <BarraProyecto />

      <div className="lista-proy-cabecera">
        <h1 className="lista-proy-h1">{t.proyectos.titulo}</h1>
        <p className="lista-proy-intro">{t.proyectos.intro}</p>
      </div>

      <div className="lista-proy-lista">
        {proyectos.map((serie) => {
          const texto = t.series[serie.id]
          const portada = serie.fotos[0]
          return (
            <article className="lista-proy" key={serie.id}>
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
                <h2 className="lista-proy-titulo">
                  <a href={`/#/p/${serie.id}`}>{texto.titulo}</a>
                </h2>
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
    </div>
  )
}
