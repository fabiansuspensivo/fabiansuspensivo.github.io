// Galeria curada. Cada foto la aprueba Fabian antes de entrar aqui;
// los archivos viven en public/fotos/ como exportaciones web (<= 500 KB).
export type Foto = {
  src: string
  alt: string
}

export type Serie = {
  id: string
  titulo: string
  nota: string
  fotos: Foto[]
}

export const series: Serie[] = []
