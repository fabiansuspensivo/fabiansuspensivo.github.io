import { series } from '../data/galeria'
import './Header.css'

export default function Header() {
  return (
    <header className="cabecera">
      <div className="contenedor cabecera-fila">
        <a href="#" className="wordmark">
          suspensivo<span className="elipsis">…</span>
        </a>
        <nav className="nav" aria-label="Secciones">
          {series.length > 0 && <a href="#trabajo">Trabajo</a>}
          <a href="#sobre">Sobre mí</a>
          <a href="#cv">CV</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
