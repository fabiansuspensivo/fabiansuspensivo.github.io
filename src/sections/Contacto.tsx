import { useIdioma } from '../i18n/idioma'
import './Contacto.css'

export default function Contacto() {
  const { t } = useIdioma()
  return (
    <section className="seccion" id="contacto">
      <div className="contenedor">
        <h2 className="titulo-seccion">{t.contacto.titulo}</h2>
        <p className="contacto-frase">
          {t.contacto.pregunta}
          <br />
          {t.contacto.escribeme}
          <span className="elipsis-contacto">…</span>
        </p>
        <div className="contacto-vias">
          <a href="mailto:fabiansuspensivo@gmail.com">
            fabiansuspensivo@gmail.com
          </a>
          <a
            href="https://www.instagram.com/suspensivof/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram @suspensivof ↗
          </a>
        </div>
      </div>
    </section>
  )
}
