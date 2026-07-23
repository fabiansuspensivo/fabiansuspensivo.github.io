import { series } from '../data/galeria'
import { useIdioma } from '../i18n/idioma'
import type { Idioma } from '../i18n/textos'
import Puntos from '../components/Puntos'

const IDIOMAS: Idioma[] = ['es', 'ca', 'de']

// Barra superior de las paginas propias (lista de Proyectos y cada proyecto).
// Deja siempre volver a Inicio (el logo), a Trabajo, a Proyectos, y cambiar idioma.
export default function BarraProyecto() {
  const { idioma, t, cambiarIdioma } = useIdioma()
  const proyectos = series.filter((s) => s.proyecto)
  return (
    <header className="proyecto-barra">
      <a href="/" className="wordmark" aria-label="Inicio">
        <img src="/logo-s.png" alt="" className="logo-s" width="48" height="48" />
        suspensivo
        <Puntos />
      </a>
      <div className="cabecera-derecha">
        <nav className="nav" aria-label="Secciones">
          <a href="/#trabajo">{t.nav.trabajo}</a>
          {proyectos.length > 0 && (
            <div className="nav-trabajo">
              <a href="/#/proyectos">{t.nav.proyectos}</a>
              <div className="nav-menu" role="menu">
                {proyectos.map((s) => (
                  <a key={s.id} role="menuitem" href={`/#/p/${s.id}`}>
                    {t.series[s.id].titulo}
                  </a>
                ))}
              </div>
            </div>
          )}
          <a href="/#sobre">{t.nav.sobre}</a>
          <a href="/#contacto">{t.nav.contacto}</a>
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
    </header>
  )
}
