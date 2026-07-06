import { useIdioma } from '../i18n/idioma'
import './Cv.css'

// Version publica y curada del CV. La fuente de verdad completa es privada;
// aqui solo entra lo que Fabian aprueba publicar.
const ENLACE_SPIEGEL =
  'https://www.spiegel.de/ausland/hantavirus-auf-der-hondius-einer-ruft-wenn-irgendjemand-das-schiff-sieht-sagt-uns-bescheid-a-c741520f-5596-49cd-8c47-e28909ac47f6'

export default function Cv() {
  const { t } = useIdioma()
  const filas = [
    { bloque: t.cv.bloques.publicaciones, entrada: t.cv.spiegel, enlace: ENLACE_SPIEGEL },
    { bloque: t.cv.bloques.organizaciones, entrada: t.cv.openarms },
    { bloque: t.cv.bloques.cine, entrada: t.cv.fotofija },
    { bloque: t.cv.bloques.encurso, entrada: t.cv.documental },
  ]
  return (
    <section className="seccion" id="cv">
      <div className="contenedor">
        <h2 className="titulo-seccion">{t.cv.titulo}</h2>
        <dl className="cv-lista">
          {filas.map((f) => (
            <div className="cv-fila" key={f.entrada.titulo}>
              <dt className="meta">{f.bloque}</dt>
              <dd>
                <h3 className="cv-titulo">
                  {f.enlace ? (
                    <a href={f.enlace} target="_blank" rel="noreferrer">
                      {f.entrada.titulo} ↗
                    </a>
                  ) : (
                    f.entrada.titulo
                  )}
                </h3>
                <p className="cv-detalle">{f.entrada.detalle}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
