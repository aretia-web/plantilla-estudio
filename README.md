# Plantilla · web de estudio de tatuaje

Plantilla de web para un estudio con varios residentes: portada con galería, manifiesto, residentes, proceso de cita con «Prepara tu mensaje», estudio y contacto. Todos los textos, datos y fotos son de ejemplo y se personalizan para cada cliente. Dirección de diseño en [DESIGN.md](DESIGN.md).

## Tecnología

- **Astro** (salida estática) + **TypeScript**. Web de contenido con interactividad puntual (menú, visor, “prepara tu mensaje”): sin React, los scripts son TypeScript plano y pesan unos pocos KB.
- **CSS propio** con variables (`src/styles/global.css`) y estilos por componente.
- **Fuentes autoalojadas** con Fontsource (Grenze Gotisch + Archivo): sin peticiones a Google.
- **Imágenes** optimizadas por Astro (AVIF/WebP, `srcset`, carga diferida).
- Sin cookies, sin analítica, sin base de datos.

## Uso

Requiere Node 22.

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run check
```

`npm run dev` sirve en http://localhost:4321 · `npm run build` genera `dist/` · `npm run check` comprueba tipos.

## Cómo personalizarla para un cliente

| Qué | Archivo |
|---|---|
| Nombre, descriptor, lema, teléfono, WhatsApp, dirección, horario, Instagram, titular legal, dominio | `src/data/site.ts` |
| Residentes, estilos y sus Instagram | `src/data/artists.ts` |
| Fotos de trabajos, hero, estudio, imagen destacada y logotipo | `src/data/gallery.ts` + carpetas en `src/assets/` |
| Textos de secciones (manifiesto, proceso de cita, estudio…) | `src/components/*.astro` |
| Colores y tipografía | `src/styles/global.css` |
| Favicon | `public/favicon.svg` |
| Imagen social e iconos PNG | `node scripts/make-social.mjs` (regenera `public/og.png`, `favicon-48.png`, `apple-touch-icon.png`) |

Checklist rápida:

- [ ] `src/data/site.ts`: nombre, descriptor, lema, Instagram, dirección, contacto, horario y titular legal.
- [ ] Dominio en `src/data/site.ts` (`url`), `astro.config.mjs` (`site`) y `public/robots.txt`.
- [ ] Residentes en `src/data/artists.ts`.
- [ ] Fotos en `src/assets/` y rutas en `src/data/gallery.ts`; logotipo en `src/assets/marca/logo.png`.
- [ ] Paleta (`--accent`, `--warm`…) y fuente display en `src/styles/global.css`.
- [ ] Favicon en `public/favicon.svg` y después `node scripts/make-social.mjs`.
- [ ] Revisar los textos de ejemplo de cada sección.

### Cambiar fotos

1. Copia la foto (JPG/PNG/WebP, cuanto más grande mejor) a `src/assets/trabajos/`, `src/assets/estudio/` o `src/assets/residentes/`.
2. En `src/data/gallery.ts` (o `artists.ts`), pon la ruta en `image` (`'trabajos/nombre.jpg'`) y escribe un `alt` que describa el tatuaje.
3. Las piezas con foto se pueden ampliar en el visor automáticamente. `size` decide el hueco: `feature`, `tall`, `regular`, `wide`.
4. Si añades `category` a varias piezas (mínimo 2 estilos con 3 piezas cada uno), aparecen los filtros.

Si una ranura no tiene foto, se muestra una placa «Foto pendiente», útil para enseñar la maqueta al cliente. La indicación de dónde sustituirla solo aparece en local (`npm run dev`).

### Canal de contacto

- Por defecto, “Pide tu cita” abre un **mensaje directo de Instagram** (`ig.me/m/<cuenta>`).
- Si se rellena `whatsapp` en `site.ts`, todos los botones pasan a WhatsApp y “Prepara tu mensaje” abre WhatsApp con el texto ya escrito.
- “Prepara tu mensaje” **no envía ni guarda datos**: compone el texto en el navegador; con Instagram lo copia al portapapeles y abre el chat.
- Si se quiere un formulario que llegue al estudio, la opción más simple es **Netlify Forms** (con campo trampa antispam y aviso de privacidad actualizado).

## Desplegar en Netlify

1. Sube el proyecto a un repositorio de GitHub.
2. En Netlify: *Add new site → Import from Git*, elige el repositorio. `netlify.toml` ya define `npm run build` y la carpeta `dist`.
3. Cambia el dominio en `astro.config.mjs` (`site`), `src/data/site.ts` (`url`) y `public/robots.txt`.

No hace falta ninguna variable de entorno.
