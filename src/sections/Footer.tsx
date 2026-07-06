import './Footer.css'

export default function Footer() {
  return (
    <footer className="pie">
      <div className="contenedor pie-fila">
        <span className="meta">
          © {new Date().getFullYear()} Fabian Suspensivo
        </span>
        <span className="pie-marca">
          suspensivo<span className="elipsis-pie">…</span>
        </span>
      </div>
    </footer>
  )
}
