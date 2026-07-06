import { useIdioma } from '../i18n/idioma'
import './Hero.css'

export default function Hero() {
  const { t } = useIdioma()
  return (
    <section className="hero">
      <div className="contenedor">
        <h1 className="hero-titulo">
          Fabian
          <br />
          Suspensivo<span className="elipsis-hero">…</span>
        </h1>
        <p className="hero-sub">{t.hero.sub}</p>
      </div>
    </section>
  )
}
