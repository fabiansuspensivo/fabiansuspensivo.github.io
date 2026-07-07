import './Puntos.css'

// Los puntos suspensivos de la marca, como tres circulos rojos (no el glifo
// cuadrado de Archivo). Escalan con el font-size del texto que los rodea.
export default function Puntos() {
  return (
    <span className="puntos" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  )
}
