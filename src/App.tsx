import { useEffect, useState } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Trabajo from './sections/Trabajo'
import Proyectos from './sections/Proyectos'
import Sobre from './sections/Sobre'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'
import Proyecto from './sections/Proyecto'
import { series } from './data/galeria'

// enrutado minimo por hash: #/p/<proyecto> abre la pagina dedicada a un proyecto
function proyectoDelHash(): string | null {
  const m = window.location.hash.match(/^#\/p\/(.+)$/)
  if (!m) return null
  const id = decodeURIComponent(m[1])
  return series.some((s) => s.id === id) ? id : null
}

export default function App() {
  const [proyecto, setProyecto] = useState<string | null>(proyectoDelHash)

  useEffect(() => {
    const alCambiar = () => setProyecto(proyectoDelHash())
    window.addEventListener('hashchange', alCambiar)
    return () => window.removeEventListener('hashchange', alCambiar)
  }, [])

  if (proyecto) return <Proyecto id={proyecto} />

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trabajo />
        <Proyectos />
        <Sobre />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
