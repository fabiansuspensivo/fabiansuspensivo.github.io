import { useIdioma } from '../i18n/idioma'
import Puntos from '../components/Puntos'
import './Hero.css'

export default function Hero() {
  const { t } = useIdioma()
  return (
    <section className="hero">
      <div className="contenedor">
        <p className="hero-sub">{t.hero.sub}</p>
        <h1 className="hero-titulo">
          Fabian Suspensivo
          <Puntos />
        </h1>
      </div>
    </section>
  )
}
