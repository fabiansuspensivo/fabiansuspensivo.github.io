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

## M05 - Galería curada  [x]
Objetivo: series de fotos elegidas por Fabián (nunca auto-elegidas), exportadas para web.
Entregable: `public/fotos/` (JPG <= 500 KB) + `src/data/galeria.ts` con series y alt text.
Hecho cuando: Fabián aprobó cada foto publicada y la página las muestra bien en móvil.
Notas: (2026-07-07) hecho con 101 fotos que él eligió en una hoja de contactos, en 5 series.
Pendiente su 2a selección para afinar (dijo que la hará otro día). Filas justificadas por
altura (no se recortan), muestra de 4 por serie con botón "ver las N fotos".

## M06 - Sobre mí + CV público + contacto  [x]
Objetivo: textos reales en su voz; CV curado (solo lo aprobado por Fabián).
Hecho cuando: Fabián aprobó los textos publicados.
Notas: (2026-07-07) Sobre mí con el texto que él eligió (opción "prensa directa");
CV con Der Spiegel (enlace), Open Arms, foto fija y su serie de Catalunya; contacto con
correo, WhatsApp e Instagram. Entrevista en curso (`studio/cv/entrevista.md`) para
enriquecer Sobre mí en próximas rondas.

## M07 - Deploy y dominio propio  [x]
Objetivo: sitio público, en vivo y con dominio propio.
Hecho cuando: los dominios sirven el sitio con HTTPS.
Notas: (2026-07-07) EN VIVO en **https://suspensivo.com** (canónico) y **https://suspensivo.es**
(ambos con www), hospedado en **Vercel** (proyecto `suspensivo`). Fabián compró los dominios
en GoDaddy; DNS vía API de GoDaddy (A @ -> 76.76.21.21, CNAME www -> cname.vercel-dns.com).
Republicar: `vercel deploy --prod --yes --cwd .`. Respaldo aún en Pages
(`fabiansuspensivo.github.io`, rama `gh-pages`). Guía de depuración completa: sección
"Web deployment & DNS" del CLAUDE.md raíz.

## M08 - Favicon, OG y trilingüe  [x]
Objetivo: favicon desde el logo, imagen para compartir, y web en es/ca/de.
Hecho cuando: la pestaña muestra la S, al compartir sale tarjeta, y detecta el idioma.
Notas: (2026-07-07) favicon e ícono desde `logo-S.png`; `og.png` para redes; i18n es/ca/de
con detección automática del navegador y selector ES/CA/DE. QA visual contra portafolios de
referencia (McCurry, Magnum, Addario, Noire): nombre más sobrio, obra arriba, puntos rojos
redondos (antes cuadrados, parecían Mossos).

## M12 - Apartado Proyectos y La playa que desaparece  [x]
Objetivo: separar la obra de autor del trabajo por encargo con un apartado propio,
y publicar el primer proyecto de autor.
Entregable: pestaña "Proyectos" en la navegación, seccion `#proyectos` en la portada
(`src/sections/Proyectos.tsx` y `.css`), serie `la-playa-que-desaparece` con 14 fotos
en `public/fotos/` y textos en es, ca y de.
Hecho cuando: la pestaña Proyectos abre su propia pagina `#/proyectos`, desde ahi se entra
al proyecto en `#/p/...` y las 14 fotos cargan en los tres idiomas.
Notas: las fotos salieron del album compartido de Google Fotos "LA PLAYA QUE DESAPARECE"
(nov 2023 a jun 2024, 196 fotos); Fabian eligio 14 con una hoja de contacto con casillas.
El texto del proyecto es suyo, tal cual lo escribio en la portada del album. Decisiones suyas del 2026-07-22: **cada proyecto aparece una sola vez**; El Ball de Nuria se
queda arriba en Trabajo y NO se repite en Proyectos; y **Proyectos NO es una seccion de la
portada**, es una pagina aparte a la que se llega desde la pestaña, porque no quiere obra de
autor colgando al final del inicio. Ojo al tocar estilos: la pagina de proyecto
(`Proyecto.css`) ya usaba `.proyecto-titulo` y compania, por eso el listado usa el prefijo
`.lista-proy-`.

## M09 - Pase SEO y calidad (Lighthouse >= 90)  [ ]
Objetivo: metadatos por idioma con `hreflang`, sitemap real, alt en todas las fotos,
Lighthouse >= 90 en las cuatro categorías.
Hecho cuando: reporte Lighthouse con >= 90 en todo.

## M10 - 2a selección de fotos + hero fotográfico (evaluar)  [ ]
Objetivo: incorporar la 2a selección de Fabián; evaluar con él un hero con foto a sangre.
Hecho cuando: galería afinada y decisión del hero tomada.

## M11 - Dominio propio (evaluar)  [ ]
Objetivo: decidir con Fabián si comprar dominio; solo cuando la página ya trabaje por él.
Hecho cuando: decisión tomada y anotada aquí.

---

Misiones de la marca de servicios (Cataluña) viven aparte y parten cuando el portafolio
esté publicado: naming e identidad, landing con una sola llamada a la acción, copy es-ES y
catalán, SEO local.
