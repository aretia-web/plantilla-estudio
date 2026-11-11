/**
 * Imágenes de la portada.
 *
 * Para añadir una foto: copiarla a src/assets/trabajos/ (o estudio/, marca/) y poner su ruta en `image`.
 * Astro genera automáticamente AVIF/WebP en varios tamaños.
 * Mientras `image` no exista, se muestra una placa "Foto pendiente" (ideal para enseñar la maqueta).
 *
 * `size` controla la composición: 'feature' (pieza protagonista), 'tall' (vertical), 'regular', 'wide'.
 */
export type Work = {
  image?: string;
  alt: string;
  title?: string;
  /** Nombre tal y como aparece en src/data/artists.ts */
  artist?: string;
  /** Estilo. Activa los filtros cuando hay al menos 2 estilos con 3 piezas cada uno. */
  category?: string;
  description?: string;
  size: 'feature' | 'tall' | 'regular' | 'wide';
  /** Punto focal del recorte, p. ej. '50% 30%'. */
  position?: string;
};

export const works: Work[] = [
  { size: 'feature', title: 'Realismo en negro y gris', alt: 'Trabajo de ejemplo: realismo en negro y gris' },
  { size: 'tall', title: 'Color', alt: 'Trabajo de ejemplo: pieza a color' },
  { size: 'tall', title: 'Ilustración', alt: 'Trabajo de ejemplo: ilustración en línea y sombra' },
  { size: 'regular', title: 'Tradicional', alt: 'Trabajo de ejemplo: tradicional a color' },
  { size: 'regular', title: 'Lettering', alt: 'Trabajo de ejemplo: lettering en línea fina' },
];

/** Foto principal del hero (src/assets/...). */
export const heroImage: { image?: string; alt: string; caption: string; position?: string } = {
  alt: 'Foto principal del estudio',
  caption: 'El equipo',
  position: '50% 50%',
};

/** Fotos del espacio. La segunda es opcional: si no hay, la composición se adapta. */
export const studioImages: { image?: string; alt: string }[] = [{ alt: 'Interior del estudio' }];

/** Imagen destacada de la sección «La casa» (cartel, flash, detalle del estudio…). */
export const featureImage: { image?: string; alt: string; caption: string } = {
  alt: 'Imagen destacada del estudio',
  caption: 'Imagen destacada',
};

/**
 * Logotipo o sello del estudio (PNG con transparencia, claro sobre oscuro), p. ej. 'marca/logo.png'.
 * Si no hay, la llamada final se muestra sin sello.
 */
export const logo: { image?: string; alt: string } = {
  alt: 'Logotipo del estudio',
};
