import { useIdioma } from '../i18n/idioma'
import './Sobre.css'

export default function Sobre() {
  const { t } = useIdioma()
  return (
    <section className="seccion" id="sobre">
      <div className="contenedor sobre-fila">
        <h2 className="titulo-seccion">{t.sobre.titulo}</h2>
        <div className="sobre-texto">
          <p>{t.sobre.p1}</p>
          <p>{t.sobre.p2}</p>
          <p>{t.sobre.p3}</p>
          <p>{t.sobre.p4}</p>
        </div>
      </div>
    </section>
  )
}
