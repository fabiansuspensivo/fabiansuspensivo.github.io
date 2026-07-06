import './Contacto.css'

export default function Contacto() {
  return (
    <section className="seccion" id="contacto">
      <div className="contenedor">
        <h2 className="titulo-seccion">Contacto</h2>
        <p className="contacto-frase">
          ¿Un concierto, una sesión, un encargo editorial?
          <br />
          Escríbeme<span className="elipsis-contacto">…</span>
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
