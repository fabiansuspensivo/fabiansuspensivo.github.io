import { useEffect, useState } from 'react'
import { useIdioma } from '../i18n/idioma'
import './Sobre.css'

// Serie "Pasamontañas": una sola foto que rota sola cada 10 s, sin controles.
const PASAMONTANAS = [
  '/fotos/pasamontanas-01.jpg',
  '/fotos/pasamontanas-02.jpg',
  '/fotos/pasamontanas-03.jpg',
  '/fotos/pasamontanas-04.jpg',
  '/fotos/pasamontanas-05.jpg',
  '/fotos/pasamontanas-06.jpg',
  '/fotos/pasamontanas-07.jpg',
]
const INTERVALO = 10000

function Rotador() {
  const [i, setI] = useState(0)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    // precargar todas para que el cambio sea instantaneo
    PASAMONTANAS.forEach((src) => {
      const im = new Image()
      im.src = src
    })
    const id = window.setInterval(() => {
      setVisible(false)
      window.setTimeout(() => {
        setI((v) => (v + 1) % PASAMONTANAS.length)
        setVisible(true)
      }, 650)
    }, INTERVALO)
    return () => window.clearInterval(id)
  }, [])
  return (
    <div className="sobre-rotador" aria-hidden="true">
      <img src={PASAMONTANAS[i]} alt="" className={visible ? 'visible' : ''} />
    </div>
  )
}

export default function Sobre() {
  const { t } = useIdioma()
  return (
    <section className="seccion" id="sobre">
      <div className="contenedor">
        <h2 className="titulo-seccion">{t.sobre.titulo}</h2>
        <div className="sobre-fila">
          <Rotador />
          <div className="sobre-texto">
            <p>{t.sobre.p1}</p>
            <p>{t.sobre.p2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
