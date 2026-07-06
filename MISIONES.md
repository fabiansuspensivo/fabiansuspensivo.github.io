# Misiones - portafolio de Fabian Suspensivo

> Reglas (del sistema de misiones): una misión a la vez, en orden. Si una misión resulta
> grande, se divide aquí mismo y se hace la primera parte. Toda misión termina con commit,
> push y el resultado en la pantalla de Fabián. Las misiones de diseño obedecen el contrato
> de gusto y la ley de iteración (nunca mostrar el primer render). Este archivo es público:
> nada de precios, clientes ni datos del negocio.

## M01 - Manual de marca v1  [x]
Objetivo: tokens de color, tipografía y espacio a partir del logo y las referencias.
Entregable: manual en el repo privado de marca; tokens reflejados en `src/styles/tokens.css`.
Hecho cuando: los tokens existen y la web solo usa valores del manual.
Notas: (2026-07-06) hecho. Propuesta nueva: el elipsis rojo (…) como gesto de marca,
pendiente de validación de Fabián. El rojo #F0323C es aproximado hasta tener el logo original.

## M02 - Esqueleto Bun + Vite + React + TS y deploy a GitHub Pages  [x]
Objetivo: sitio estático construible y publicable con Actions en cada merge a main.
Entregable: este repo, `deploy.yml`, build verde.
Hecho cuando: la URL de Pages sirve el sitio.
Notas: (2026-07-06) código listo; el repo se hace público y Pages se activa solo cuando
Fabián apruebe publicar. Hasta entonces se revisa en localhost.

## M03 - Tokens de diseño implementados  [x]
Objetivo: variables CSS desde el manual, tipografía Archivo autoalojada.
Hecho cuando: ninguna sección usa colores o fuentes fuera de tokens.
Notas: (2026-07-06) hecho junto a M02.

## M04 - Estructura y navegación  [x]
Objetivo: una página con secciones Trabajo, Sobre mí, CV, Contacto, header fijo y footer.
Hecho cuando: navegación por anclas funciona en móvil y escritorio.
Notas: (2026-07-06) hecho. La galería se oculta sola mientras esté vacía.

## M05 - Galería curada  [ ]
Objetivo: series de fotos elegidas por Fabián (nunca auto-elegidas), exportadas para web.
Entregable: `public/fotos/` (WebP <= 500 KB) + `src/data/galeria.ts` con series y alt text.
Hecho cuando: Fabián aprobó cada foto publicada y la página las muestra bien en móvil.
Notas: (2026-07-06) en curso: hoja de contactos generada desde sus álbumes para que él
marque su selección.

## M06 - Sobre mí + CV público + contacto  [~]
Objetivo: textos reales en su voz; CV curado (solo lo aprobado por Fabián).
Hecho cuando: Fabián aprobó los textos publicados.
Notas: (2026-07-06) borrador en página, pendiente su revisión.

## M07 - Hero fotográfico  [ ]
Objetivo: reemplazar el hero tipográfico por una foto a sangre elegida por Fabián.
Hecho cuando: LCP sigue rápido (imagen optimizada, sin layout shift).

## M08 - Pase SEO y calidad  [ ]
Objetivo: la línea base completa: metadatos por página, sitemap real, alt en todas las
fotos, Lighthouse >= 90 en todo.
Hecho cuando: reporte Lighthouse adjunto en el PR con >= 90 en las cuatro categorías.

## M09 - Favicon y OG image  [ ]
Objetivo: favicon desde el logo original (cuando llegue el archivo) y una imagen para
compartir en redes.
Hecho cuando: al pegar la URL en WhatsApp/Instagram se ve tarjeta con foto y título.

## M10 - Dominio propio (evaluar)  [ ]
Objetivo: decidir con Fabián si comprar dominio; solo cuando la página ya trabaje por él.
Hecho cuando: decisión tomada y anotada aquí.

---

Misiones de la marca de servicios (Cataluña) viven aparte y parten cuando el portafolio
esté publicado: naming e identidad, landing con una sola llamada a la acción, copy es-ES y
catalán, SEO local.
