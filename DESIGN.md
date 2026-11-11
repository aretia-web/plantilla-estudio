# Plantilla — Dirección de diseño

## 1. Idea

**Fanzine de estudio.** La web se plantea como un fanzine impreso y numerado: páginas en negro tinta, un pliego en papel hueso, cabeceras en una tipografía display con carácter, etiquetas condensadas tipo hoja de flash y **un único color de acento** muy controlado.

Funciona bien para estudios con varios residentes y estilos distintos: cada sección es una “página” de la misma publicación. Al personalizarla para un cliente, lo que suele cambiar es la tipografía display, el color de acento, el tono de los textos y las fotos; la estructura se mantiene.

### Antes de personalizar, recoger del cliente

- Nombre, lema y forma de presentarse (estudio privado, estudio a pie de calle, colectivo…).
- Logotipo (idealmente en SVG) y colores que ya usa.
- Residentes, sus estilos y cuentas de Instagram.
- Fotos de trabajos en alta resolución y fotos del espacio.
- Canal de cita (Instagram, WhatsApp, teléfono), horario y dirección.
- Titular legal (nombre o razón social, NIF y correo) para `/privacidad/`.

No inventar datos que el cliente no haya dado: teléfono, horario, precios, biografías o certificaciones.

## 2. Sistema

### Color (4 + variaciones)

| Token | Valor de ejemplo | Uso |
|---|---|---|
| `--ink` | `#0E0D0C` | Fondo principal, texto sobre papel |
| `--bone` | `#ECE6DA` | Texto principal en oscuro, secciones “papel” |
| `--warm` | `#B5865A` | Secundario cálido: etiquetas, numeración |
| `--accent` | `#E2603F` | Acento muy controlado: foco, CTA principal, detalles |

Variaciones: `--ink-2` (superficies), `--bone-dim` (texto secundario, contraste ≥ 7:1 sobre tinta), `--accent-deep` y `--warm-deep` (versiones legibles sobre papel). Nada de degradados. Al cambiar el acento, comprobar el contraste del texto tinta sobre el botón primario (≥ 4,5:1) y actualizar el halo de `FinalCta.astro`.

### Tipografía (2 familias, autoalojadas)

- **Display — Grenze Gotisch** (variable): gótica contemporánea legible en titulares largos. Solo para cabeceras y nombres. Es la pieza que más conviene adaptar al logotipo del cliente.
- **Funcional — Archivo** (variable con eje de anchura): texto, navegación y formularios a anchura normal; etiquetas editoriales en **Archivo condensada** (`wdth 62–75`), como los rótulos de una hoja de flash.
- Escala fluida con `clamp()` en `src/styles/global.css` (`--step--1` … `--step-6`).
- Fuentes servidas desde el propio dominio (Fontsource): sin peticiones a Google.

### Composición

- Rejilla de 12 columnas, ancho máximo 1440 px, márgenes laterales fluidos (16 px en móvil).
- Ritmo de “pliegos”: secciones en tinta alternadas con un pliego en papel (manifiesto) para romper la monotonía oscura.
- Cada sección lleva una etiqueta editorial y una línea fina.

### Fotografía

- El tatuaje manda: sin overlays oscuros, sin filtros. Hover solo con un zoom de 3 % y una etiqueta pequeña.
- Proporciones fijas por ranura (4:5, 3:4, 1:1, 16:10) para evitar saltos.
- Mientras no haya foto, se muestra una **placa provisional** claramente rotulada (“Foto pendiente”), nunca un stock.

### Componentes

- **Botones:** rectangulares, esquinas vivas, borde de 1 px. Primario = acento sobre tinta. Secundario = contorno hueso. Flecha que se desplaza en hover.
- **Enlaces:** subrayado fino que se engrosa en hover.
- **Foco:** contorno de acento de 2 px con separación, siempre visible.
- **Iconos:** solo los imprescindibles (Instagram, WhatsApp, teléfono, ubicación, flecha, cerrar, imagen), dibujados en SVG inline.

### Movimiento

- Aparición suave (opacidad + 16 px) de bloques al entrar en pantalla; todo es visible si no hay JS.
- Menú móvil a pantalla completa con fundido; visor con `<dialog>` nativo.
- Sin parallax ni WebGL. `prefers-reduced-motion` desactiva todas las transiciones.

### Responsive

- **Móvil primero:** en el hero, nombre → lema → acciones → foto; se entiende qué es y cómo pedir cita sin desplazar. Barra fija inferior de “Pide tu cita” que aparece tras el hero y deja hueco al final de página.
- **Tablet:** galería a 6 columnas, residentes a 1 columna amplia.
- **Escritorio:** hero asimétrico (texto 7/12, foto 5/12) con texto vertical lateral; galería editorial con piezas protagonistas.
