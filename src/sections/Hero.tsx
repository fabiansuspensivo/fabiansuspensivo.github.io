import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="contenedor">
        <h1 className="hero-titulo">
          Fotografío música
          <br />y calle<span className="elipsis-hero">…</span>
        </h1>
        <p className="hero-sub">
          Conciertos, sesiones a artistas y fotoperiodismo. Barcelona.
        </p>
      </div>
    </section>
  )
}
