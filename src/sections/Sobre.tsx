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
  useEffect(() => {
    const id = window.setInterval(() => {
      setI((v) => (v + 1) % PASAMONTANAS.length)
    }, INTERVALO)
    return () => window.clearInterval(id)
  }, [])
  return (
    <div className="sobre-rotador" aria-hidden="true">
      {PASAMONTANAS.map((src, k) => (
        <img
          key={src}
          src={src}
          alt=""
          className={k === i ? 'visible' : ''}
          loading={k === 0 ? 'eager' : 'lazy'}
        />
      ))}
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
