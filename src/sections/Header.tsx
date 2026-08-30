import { useState } from 'react'
import { series } from '../data/galeria'
import { useIdioma } from '../i18n/idioma'
import type { Idioma } from '../i18n/textos'
import Puntos from '../components/Puntos'
import './Header.css'

const IDIOMAS: Idioma[] = ['es', 'ca', 'de']

export default function Header() {
  const { idioma, t, cambiarIdioma } = useIdioma()
  // en movil la nav se pliega detras de un boton de texto; en pantalla grande
  // el boton no existe y la nav esta siempre visible
  const [abierto, setAbierto] = useState(false)
  const visibles = series.filter((s) => !s.oculto)
  // en el menu de Trabajo solo las series sueltas que no salen en portada;
  // la obra de autor tiene su propio apartado
  const ocultos = series.filter((s) => s.oculto && !s.proyecto)
  const proyectos = series.filter((s) => s.proyecto)
  const cerrar = () => setAbierto(false)
  return (
    <header className={abierto ? 'cabecera abierta' : 'cabecera'}>
      <div className="contenedor cabecera-fila">
        <a href="#" className="wordmark" onClick={cerrar}>
          <img src="/logo-s.png" alt="" className="logo-s" width="48" height="48" />
          suspensivo<Puntos />
        </a>
        <div className="cabecera-derecha">
          <nav id="nav-principal" className="nav" aria-label="Secciones" onClick={cerrar}>
            {visibles.length > 0 &&
              (ocultos.length > 0 ? (
                <div className="nav-trabajo">
                  <a href="#trabajo">{t.nav.trabajo}</a>
                  <div className="nav-menu" role="menu">
                    {ocultos.map((s) => (
                      <a key={s.id} role="menuitem" href={`/proyectos/${s.id}`}>
                        {t.series[s.id].titulo}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a href="#trabajo">{t.nav.trabajo}</a>
              ))}
            {proyectos.length > 0 && (
              <div className="nav-trabajo">
                <a href="/proyectos">{t.nav.proyectos}</a>
                <div className="nav-menu" role="menu">
                  {proyectos.map((s) => (
                    <a key={s.id} role="menuitem" href={`/proyectos/${s.id}`}>
                      {t.series[s.id].titulo}
                    </a>
                  ))}
                </div>
              </div>
            )}
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
          <button
            type="button"
            className={abierto ? 'menu-boton activo' : 'menu-boton'}
            aria-expanded={abierto}
            aria-controls="nav-principal"
            onClick={() => setAbierto((v) => !v)}
          >
            {t.nav.menu}
          </button>
        </div>
      </div>
    </header>
  )
}
