import type { Serie } from '../data/galeria'

// Tarjeta vertical 1080x1920 para compartir un proyecto en historias
// (Instagram y similares) via Web Share API nivel 2. Se compone con el
// Canvas nativo: las fotos son same-origin en public/fotos/, asi que no
// hay canvas tainted ni hace falta ninguna dependencia de screenshot.

// Colores copiados de src/styles/tokens.css (--papel, --tinta, --gris);
// el canvas no puede leer variables CSS, si cambian alla se cambian aqui.
const PAPEL = '#0b0b0b'
const TINTA = '#f4f3f0'
const GRIS = '#948f89'

const ANCHO = 1080
const ALTO = 1920
// banda central donde va la foto con crop tipo object-fit: cover
const FOTO_Y = 150
const FOTO_ALTO = 1350
// margen lateral minimo del titulo
const MARGEN = 96

const FAMILIA = "'Archivo Variable', Archivo, sans-serif"

// Dibuja una linea centrada con espaciado de letras manual, letra a letra,
// porque ctx.letterSpacing no existe en todos los navegadores moviles.
function dibujarCentrado(
  ctx: CanvasRenderingContext2D,
  texto: string,
  y: number,
  espacio: number,
) {
  const letras = [...texto]
  const anchos = letras.map((l) => ctx.measureText(l).width)
  const total = anchos.reduce((a, b) => a + b, 0) + espacio * (letras.length - 1)
  let x = (ANCHO - total) / 2
  letras.forEach((l, i) => {
    ctx.fillText(l, x, y)
    x += anchos[i] + espacio
  })
}

// Ancho total de una linea con espaciado manual, para ajustar el cuerpo.
function medir(ctx: CanvasRenderingContext2D, texto: string, espacio: number) {
  const letras = [...texto]
  const anchos = letras.map((l) => ctx.measureText(l).width)
  return anchos.reduce((a, b) => a + b, 0) + espacio * (letras.length - 1)
}

async function componer(serie: Serie, titulo: string, indice: number): Promise<File> {
  // la tipografia (Archivo Variable via fontsource) tiene que estar cargada
  // antes de dibujarla en el canvas o sale la fuente del sistema
  await document.fonts.ready

  const img = new Image()
  img.src = serie.fotos[indice].src
  await img.decode()

  const canvas = document.createElement('canvas')
  canvas.width = ANCHO
  canvas.height = ALTO
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('canvas 2d no disponible')

  // fondo negro del sitio
  ctx.fillStyle = PAPEL
  ctx.fillRect(0, 0, ANCHO, ALTO)

  // foto centrada con crop cover: se escala hasta llenar la banda y se
  // recorta el exceso por los lados, sin deformar
  const escala = Math.max(ANCHO / img.naturalWidth, FOTO_ALTO / img.naturalHeight)
  const sw = ANCHO / escala
  const sh = FOTO_ALTO / escala
  ctx.drawImage(
    img,
    (img.naturalWidth - sw) / 2,
    (img.naturalHeight - sh) / 2,
    sw,
    sh,
    0,
    FOTO_Y,
    ANCHO,
    FOTO_ALTO,
  )

  ctx.textBaseline = 'middle'

  // si la foto ya trae el titulo y el autor rotulados dentro de la imagen
  // (el poster de la serie) no se le dibuja texto encima, solo el dominio
  if (!serie.fotosRotuladas?.includes(indice)) {
    // nombre del autor como cabecera, centrado en la franja sobre la foto
    ctx.fillStyle = TINTA
    ctx.font = `600 28px ${FAMILIA}`
    dibujarCentrado(ctx, 'FABIAN SUSPENSIVO', FOTO_Y / 2, 28 * 0.14)

    // titulo en mayusculas con el espaciado de titulos del sitio (0.14em,
    // como .titulo-seccion en global.css); si no cabe se reduce el cuerpo
    const linea = titulo.toUpperCase()
    let cuerpo = 64
    ctx.fillStyle = TINTA
    for (; cuerpo > 30; cuerpo -= 2) {
      ctx.font = `700 ${cuerpo}px ${FAMILIA}`
      if (medir(ctx, linea, cuerpo * 0.14) <= ANCHO - MARGEN * 2) break
    }
    dibujarCentrado(ctx, linea, 1650, cuerpo * 0.14)
  }

  // dominio abajo, tipografia pequena
  ctx.fillStyle = GRIS
  ctx.font = `500 30px ${FAMILIA}`
  dibujarCentrado(ctx, 'suspensivo.com', 1830, 30 * 0.08)

  const blob = await new Promise<Blob | null>((resolver) =>
    canvas.toBlob(resolver, 'image/jpeg', 0.9),
  )
  if (!blob) throw new Error('no se pudo exportar la tarjeta')
  return new File([blob], `${serie.id}-${indice + 1}-story.jpg`, { type: 'image/jpeg' })
}

// Cache por serie, foto e idioma (el titulo ya viene en el idioma activo)
// para no recomponer la tarjeta en cada click; se guarda la promesa para que
// la pre-generacion y el click no compongan dos veces a la vez.
const cache = new Map<string, Promise<File>>()

export async function generarTarjetaStory(
  serie: Serie,
  titulo: string,
  indice = 0,
): Promise<File> {
  const llave = `${serie.id}:${indice}:${titulo}`
  let tarjeta = cache.get(llave)
  if (!tarjeta) {
    tarjeta = componer(serie, titulo, indice)
    // si fallo (foto rota, canvas sin memoria) no dejamos la promesa rechazada
    // en cache, para poder reintentar en el proximo click
    tarjeta.catch(() => cache.delete(llave))
    cache.set(llave, tarjeta)
  }
  return tarjeta
}
