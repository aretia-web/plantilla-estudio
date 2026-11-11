// Genera la imagen social (public/og.png, 1200x630) y los iconos PNG a partir de public/favicon.svg.
// Toma nombre, descriptor, lema y ubicación de src/data/site.ts. Si existe src/assets/marca/logo.png, lo añade.
// Uso: node scripts/make-social.mjs   (Node 22.18+; sharp viene incluido con Astro)
import { existsSync, readFileSync } from 'node:fs';
import sharp from 'sharp';
import { site } from '../src/data/site.ts';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const [line1 = '', line2 = ''] = site.tagline;
const logoPath = 'src/assets/marca/logo.png';
const hasLogo = existsSync(logoPath);

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0e0d0c"/>
  <line x1="70" y1="110" x2="${hasLogo ? 660 : 1130}" y2="110" stroke="#ece6da" stroke-opacity=".2"/>
  <text x="70" y="92" fill="#b5865a" font-family="Arial Narrow, Arial, sans-serif" font-size="22" letter-spacing="4" font-weight="700">${esc(
    `${site.descriptor} · ${site.address.area}, ${site.address.city}`.toUpperCase(),
  )}</text>
  <text x="64" y="300" fill="#ece6da" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="104">${esc(site.name)}</text>
  <text x="70" y="390" fill="#ece6da" font-family="Arial Narrow, Arial, sans-serif" font-weight="800" font-size="40">${esc(line1.toUpperCase())}</text>
  <text x="70" y="440" fill="#e2603f" font-family="Arial Narrow, Arial, sans-serif" font-weight="800" font-size="40">${esc(line2.toUpperCase())}</text>
  <text x="70" y="545" fill="#b9b1a4" font-family="Arial, sans-serif" font-size="24">${esc(`${site.descriptor} · @${site.instagram.handle}`)}</text>
</svg>`;

const layers = hasLogo ? [{ input: await sharp(logoPath).resize(430, 430).toBuffer(), left: 735, top: 100 }] : [];
await sharp(Buffer.from(og)).composite(layers).png().toFile('public/og.png');

const favicon = readFileSync('public/favicon.svg');
await sharp(favicon, { density: 300 }).resize(48, 48).png().toFile('public/favicon-48.png');
await sharp(favicon, { density: 600 }).resize(180, 180).flatten({ background: '#0e0d0c' }).png().toFile('public/apple-touch-icon.png');

console.log('OK: public/og.png, public/favicon-48.png, public/apple-touch-icon.png');
