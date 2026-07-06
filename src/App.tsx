import Header from './sections/Header'
import Hero from './sections/Hero'
import Trabajo from './sections/Trabajo'
import Sobre from './sections/Sobre'
import Cv from './sections/Cv'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trabajo />
        <Sobre />
        <Cv />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
