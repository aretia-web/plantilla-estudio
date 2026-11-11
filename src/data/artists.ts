/**
 * Residentes del estudio. Valores de ejemplo de la plantilla: sustituir por los del cliente.
 * Si `instagram` es `null`, la fila enlaza al formulario de cita con el artista preseleccionado.
 */
export type Artist = {
  name: string;
  /** Cuenta de Instagram sin @. `null` si no tiene o no está confirmada. */
  instagram: string | null;
  /** Ruta dentro de src/assets, p. ej. 'residentes/nombre.jpg'. */
  photo?: string;
  /** Estilos del artista (se muestran junto al nombre en escritorio). */
  styles?: string[];
  /** Etiqueta breve opcional, p. ej. 'Guest'. */
  tag?: string;
};

export const artists: Artist[] = [
  { name: 'Artista Uno', instagram: null, styles: ['Realismo', 'Negro y gris'] },
  { name: 'Artista Dos', instagram: null, styles: ['Tradicional', 'Color'] },
  { name: 'Artista Tres', instagram: null, styles: ['Línea fina', 'Lettering'] },
  { name: 'Artista Cuatro', instagram: null, styles: ['Ilustración'], tag: 'Guest' },
];
