import { series } from '../data/galeria'
import { useIdioma } from '../i18n/idioma'
import type { Idioma } from '../i18n/textos'
import Puntos from '../components/Puntos'
import './Header.css'

const IDIOMAS: Idioma[] = ['es', 'ca', 'de']

export default function Header() {
  const { idioma, t, cambiarIdioma } = useIdioma()
  const visibles = series.filter((s) => !s.oculto)
  const ocultos = series.filter((s) => s.oculto)
  return (
    <header className="cabecera">
      <div className="contenedor cabecera-fila">
        <a href="#" className="wordmark">
          <img src="/logo-s.png" alt="" className="logo-s" width="48" height="48" />
          suspensivo<Puntos />
        </a>
        <div className="cabecera-derecha">
          <nav className="nav" aria-label="Secciones">
            {visibles.length > 0 &&
              (ocultos.length > 0 ? (
                <div className="nav-trabajo">
                  <a href="#trabajo">{t.nav.trabajo}</a>
                  <div className="nav-menu" role="menu">
                    {ocultos.map((s) => (
                      <a key={s.id} role="menuitem" href={`/#/p/${s.id}`}>
                        {t.series[s.id].titulo}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a href="#trabajo">{t.nav.trabajo}</a>
              ))}
            <a href="#sobre">{t.nav.sobre}</a>
            <a href="#cv">{t.nav.cv}</a>
            <a href="#contacto">{t.nav.contacto}</a>
          </nav>
          <div className="idiomas" role="group" aria-label="Idioma">
            {IDIOMAS.map((cod) => (
              <button
                key={cod}
                type="button"
                className={cod === idioma ? 'idioma activo' : 'idioma'}
                onClick={() => cambiarIdioma(cod)}
              >
                {cod.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
