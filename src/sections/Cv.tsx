import './Cv.css'

type Entrada = {
  titulo: string
  detalle: string
  enlace?: string
}

type Bloque = {
  bloque: string
  entradas: Entrada[]
}

// Version publica y curada del CV. La fuente de verdad completa es privada;
// aqui solo entra lo que Fabian aprueba publicar.
const cv: Bloque[] = [
  {
    bloque: 'Publicaciones',
    entradas: [
      {
        titulo: 'Der Spiegel (Alemania)',
        detalle:
          'Reportaje fotográfico del caso de hantavirus del barco Hondius, cubierto desde el puerto de Tenerife con acceso de prensa acreditada.',
        enlace:
          'https://www.spiegel.de/ausland/hantavirus-auf-der-hondius-einer-ruft-wenn-irgendjemand-das-schiff-sieht-sagt-uns-bescheid-a-c741520f-5596-49cd-8c47-e28909ac47f6',
      },
    ],
  },
  {
    bloque: 'Organizaciones',
    entradas: [
      {
        titulo: 'Open Arms',
        detalle: 'Colaboración fotográfica con la ONG de rescate en el mar.',
      },
    ],
  },
  {
    bloque: 'Cine y producción',
    entradas: [
      {
        titulo: 'Foto fija',
        detalle: 'Fotografía de rodaje para producción audiovisual.',
      },
    ],
  },
  {
    bloque: 'En curso',
    entradas: [
      {
        titulo: 'Serie documental, Catalunya (2026)',
        detalle:
          'Trabajo fotográfico en curso sobre las problemáticas sociales en Catalunya: vivienda, huelgas, calle.',
      },
    ],
  },
]

export default function Cv() {
  return (
    <section className="seccion" id="cv">
      <div className="contenedor">
        <h2 className="titulo-seccion">CV</h2>
        <dl className="cv-lista">
          {cv.map((b) =>
            b.entradas.map((e) => (
              <div className="cv-fila" key={e.titulo}>
                <dt className="meta">{b.bloque}</dt>
                <dd>
                  <h3 className="cv-titulo">
                    {e.enlace ? (
                      <a href={e.enlace} target="_blank" rel="noreferrer">
                        {e.titulo} ↗
                      </a>
                    ) : (
                      e.titulo
                    )}
                  </h3>
                  <p className="cv-detalle">{e.detalle}</p>
                </dd>
              </div>
            )),
          )}
        </dl>
      </div>
    </section>
  )
}
