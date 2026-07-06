import { series } from '../data/galeria'
import { useIdioma } from '../i18n/idioma'
import type { Idioma } from '../i18n/textos'
import './Header.css'

const IDIOMAS: Idioma[] = ['es', 'ca', 'de']

export default function Header() {
  const { idioma, t, cambiarIdioma } = useIdioma()
  return (
    <header className="cabecera">
      <div className="contenedor cabecera-fila">
        <a href="#" className="wordmark">
          <img src="/logo-s.png" alt="" className="logo-s" width="48" height="48" />
          suspensivo<span className="elipsis">…</span>
        </a>
        <div className="cabecera-derecha">
          <nav className="nav" aria-label="Secciones">
            {series.length > 0 && <a href="#trabajo">{t.nav.trabajo}</a>}
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
