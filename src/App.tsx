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
import { useIdioma } from './i18n/idioma'
import type { Textos } from './i18n/textos'

type Ruta = { tipo: 'home' } | { tipo: 'lista' } | { tipo: 'proyecto'; id: string }

// Enrutado por RUTA REAL (indexable por Google): /proyectos y /proyectos/<id>.
// Se mantiene compatibilidad con los enlaces antiguos por hash (#/p/<id>,
// #/proyectos) para que los links ya compartidos sigan funcionando.
function rutaActual(): Ruta {
  const p = window.location.pathname.replace(/\/+$/, '') || '/'
  const mp = p.match(/^\/proyectos\/(.+)$/)
  if (mp) {
    const id = decodeURIComponent(mp[1])
    if (series.some((s) => s.id === id)) return { tipo: 'proyecto', id }
  }
  if (p === '/proyectos') return { tipo: 'lista' }

  const mh = window.location.hash.match(/^#\/p\/(.+)$/)
  if (mh) {
    const id = decodeURIComponent(mh[1])
    if (series.some((s) => s.id === id)) return { tipo: 'proyecto', id }
  }
  if (/^#\/proyectos\/?$/.test(window.location.hash)) return { tipo: 'lista' }

  return { tipo: 'home' }
}

function fijarEtiqueta(selector: string, attr: string, valor: string) {
  document.querySelector(selector)?.setAttribute(attr, valor)
}

// Fija titulo, descripcion, canonical y Open Graph segun la ruta. Asi cada
// pagina de proyecto tiene metadatos unicos: Google puede indexarla por separado
// y no la trata como copia de la portada.
function fijarMeta(ruta: Ruta, t: Textos) {
  const marca = 'Fabian Suspensivo'
  const origin = window.location.origin
  let titulo = t.meta.titulo
  let desc = t.meta.descripcion
  let url = origin + '/'
  let imagen = origin + '/og.png'

  if (ruta.tipo === 'proyecto') {
    const st = t.series[ruta.id]
    const serie = series.find((s) => s.id === ruta.id)
    if (st) {
      titulo = `${st.titulo} · ${marca}`
      desc = st.resumen || st.nota || t.meta.descripcion
    }
    url = origin + '/proyectos/' + ruta.id
    if (serie && serie.fotos[0]) imagen = origin + serie.fotos[0].src
  } else if (ruta.tipo === 'lista') {
    titulo = `${t.proyectos.titulo} · ${marca}`
    desc = t.proyectos.intro
    url = origin + '/proyectos'
  }

  document.title = titulo
  fijarEtiqueta('meta[name="description"]', 'content', desc)
  fijarEtiqueta('link[rel="canonical"]', 'href', url)
  fijarEtiqueta('meta[property="og:title"]', 'content', titulo)
  fijarEtiqueta('meta[property="og:url"]', 'content', url)
  fijarEtiqueta('meta[property="og:description"]', 'content', desc)
  fijarEtiqueta('meta[property="og:image"]', 'content', imagen)
}

export default function App() {
  const { t } = useIdioma()
  const [ruta, setRuta] = useState<Ruta>(rutaActual)

  useEffect(() => {
    const alCambiar = () => setRuta(rutaActual())
    window.addEventListener('hashchange', alCambiar)
    window.addEventListener('popstate', alCambiar)
    return () => {
      window.removeEventListener('hashchange', alCambiar)
      window.removeEventListener('popstate', alCambiar)
    }
  }, [])

  // metadatos por ruta e idioma
  useEffect(() => {
    fijarMeta(ruta, t)
  }, [ruta, t])

  // al entrar a una pagina propia siempre se empieza arriba
  useEffect(() => {
    if (ruta.tipo !== 'home') window.scrollTo(0, 0)
  }, [ruta])

  if (ruta.tipo === 'proyecto') return <Proyecto id={ruta.id} />
  if (ruta.tipo === 'lista') return <Proyectos />

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
