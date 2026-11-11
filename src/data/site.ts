/**
 * Datos del negocio. Es el ÚNICO sitio donde hay que tocar nombre, lema, teléfono, enlaces o dirección.
 * Todo lo que hay aquí son valores de ejemplo de la plantilla: sustituirlos por los del cliente.
 * Los valores `null` se consideran pendientes: los bloques que dependen de ellos no se muestran.
 */

const instagramHandle = 'tuestudio';

export const site = {
  /**
   * Nombre del estudio. En la portada, la primera palabra se muestra pequeña y el resto grande
   * (p. ej. «Estudio Nombre»). Si es una sola palabra, se muestra entera en grande.
   */
  name: 'Estudio Nombre',
  /** Descriptor corto que acompaña al nombre (cabecera del hero, pie, menú). */
  descriptor: 'Estudio de tatuaje',
  /** Lema del hero, una línea por elemento. */
  tagline: ['Tu frase de marca', 'va justo aquí.'],
  /** Dominio definitivo (sin barra final). Mantener sincronizado con astro.config.mjs y public/robots.txt. */
  url: 'https://example.com',

  instagram: {
    handle: instagramHandle,
    url: `https://www.instagram.com/${instagramHandle}/`,
    /** Abre directamente un mensaje directo con el estudio. */
    dm: `https://ig.me/m/${instagramHandle}`,
  },

  /** Número en formato internacional sin "+" ni espacios, p. ej. '34600000000'. */
  whatsapp: null as string | null,
  /** Teléfono para enlaces tel:, p. ej. '+34 600 00 00 00'. */
  phone: null as string | null,

  address: {
    street: 'Calle Ejemplo 1',
    area: 'Barrio',
    city: 'Ciudad',
    postalCode: null as string | null,
    country: 'ES',
  },

  /** Horario en texto libre, p. ej. [['Lunes a viernes', '10:00–20:00']]. */
  hours: null as [string, string][] | null,

  /** Titular de la web para el aviso legal y la privacidad. */
  legal: {
    owner: null as string | null,
    taxId: null as string | null,
    email: null as string | null,
  },
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.area}, ${site.address.city}`,
)}`;

export const phoneHref = site.phone ? `tel:${site.phone.replace(/\s+/g, '')}` : null;

export function whatsappUrl(text?: string) {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}

/** Canal principal de cita: WhatsApp si está configurado; si no, mensaje directo de Instagram. */
export const primaryContact = site.whatsapp
  ? { href: whatsappUrl()!, channel: 'WhatsApp' as const }
  : { href: site.instagram.dm, channel: 'Instagram' as const };

export const nav = [
  { href: '/#trabajos', label: 'Trabajos' },
  { href: '/#residentes', label: 'Residentes' },
  { href: '/#estudio', label: 'Estudio' },
  { href: '/#contacto', label: 'Contacto' },
];
