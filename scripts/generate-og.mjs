// Run with `node scripts/generate-og.mjs` after npm ci.
// Sharp is provided by Astro's image pipeline.
import sharp from 'sharp';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#070304"/>
<path d="M70 78H1130M70 552H1130" stroke="#F2EDE4" stroke-opacity=".2"/>
<text x="600" y="150" text-anchor="middle" fill="#F2EDE4" font-family="serif" font-style="italic" font-size="50">Gladius Digital</text>
<text x="600" y="285" text-anchor="middle" fill="#F2EDE4" font-family="sans-serif" font-weight="bold" font-size="66">SOFTWARE SOB MEDIDA</text>
<text x="600" y="375" text-anchor="middle" fill="#FF4401" font-family="sans-serif" font-weight="bold" font-size="64">PARA O SEU NEGÓCIO</text>
<text x="600" y="455" text-anchor="middle" fill="#F2EDE4" font-family="monospace" font-size="23">Arquitetura · Integrações · Automação</text>
<text x="600" y="515" text-anchor="middle" fill="#F2EDE4" fill-opacity=".6" font-family="monospace" font-size="20">gladius.digital</text>
</svg>`;
await sharp(Buffer.from(svg)).jpeg({quality:90}).toFile('public/og-default.jpg');
