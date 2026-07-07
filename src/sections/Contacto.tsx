import { useIdioma } from '../i18n/idioma'
import Puntos from '../components/Puntos'
import './Contacto.css'

// +34 722 133 162 en formato wa.me (sin espacios ni signos)
const WHATSAPP = 'https://wa.me/34722133162'

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
          <Puntos />
        </p>
        <div className="contacto-vias">
          <a href="mailto:fabiansuspensivo@gmail.com">
            fabiansuspensivo@gmail.com
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            WhatsApp ↗
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
