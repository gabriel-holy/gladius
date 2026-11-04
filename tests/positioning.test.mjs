import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
test('built homepage communicates solutions and a discovery-led process', () => {
  const normalized = html.replace(/\s+/g, ' ').toLowerCase();
  for (const text of ['arquitetura de soluções', 'sistemas sob medida', 'integração e automação', 'sites e portais', 'id="processo"', 'id="precos"', 'id="contato"']) assert.ok(normalized.includes(text), text);
});
test('real case and primary contact are present without invented email or package prices', () => {
  assert.ok(html.includes('https://barricasindustriais.com/'));
  assert.ok(html.includes('https://wa.me/5511994095913'));
  assert.ok(!html.includes('contato@gladius.digital'));
  assert.ok(!/R\$|mailto:|24 horas|24h/.test(html));
});
test('all homepage navigation fragments have matching anchors', () => {
  for (const [, id] of html.matchAll(/href="#([^"\s]+)"/g)) assert.ok(html.includes(`id="${id}"`), `missing #${id}`);
});
test('social sharing image exists and metadata reflects the new positioning', () => {
  assert.ok(html.includes('Arquitetura de software e automação'));
  assert.ok(readFileSync(new URL('../public/og-default.jpg', import.meta.url)).length > 1000);
});
