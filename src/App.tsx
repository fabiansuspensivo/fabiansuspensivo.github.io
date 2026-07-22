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

// #/proyectos: el listado de obra de autor, que tampoco vive en la portada
function esListaDeProyectos(): boolean {
  return /^#\/proyectos\/?$/.test(window.location.hash)
}

export default function App() {
  const [proyecto, setProyecto] = useState<string | null>(proyectoDelHash)
  const [lista, setLista] = useState<boolean>(esListaDeProyectos)

  useEffect(() => {
    const alCambiar = () => {
      setProyecto(proyectoDelHash())
      setLista(esListaDeProyectos())
    }
    window.addEventListener('hashchange', alCambiar)
    return () => window.removeEventListener('hashchange', alCambiar)
  }, [])

  // al entrar a una pagina propia siempre se empieza arriba
  useEffect(() => {
    if (proyecto || lista) window.scrollTo(0, 0)
  }, [proyecto, lista])

  if (proyecto) return <Proyecto id={proyecto} />
  if (lista) return <Proyectos />

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trabajo />
        <Sobre />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
