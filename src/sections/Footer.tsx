import Puntos from '../components/Puntos'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="pie">
      <div className="contenedor pie-fila">
        <span className="meta">© 2026 Fabian Suspensivo</span>
        <span className="pie-marca">
          suspensivo
          <Puntos />
        </span>
      </div>
    </footer>
  )
}
