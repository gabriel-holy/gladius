import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const base = '2d39a03d7b1a8bf1a0b5a71d35bf03072efac4df';
const html = readFileSync('dist/index.html', 'utf8');
const files = ['src/components/home/Hero.astro','src/components/home/Works.astro','src/components/home/Services.astro','src/components/home/Pricing.astro','src/components/home/Contact.astro','src/components/layout/Navbar.astro'];
test('original fonts, styles, animations and component markup remain intact', () => {
  for (const path of files) {
    const original = execFileSync('git', ['show', `${base}:${path}`], {encoding:'utf8'});
    const current = readFileSync(path,'utf8');
    for (const regex of [/<script\b[^>]*>[\s\S]*?<\/script>/g, /<style\b[^>]*>[\s\S]*?<\/style>/g, /\b(?:class|class:list|style|data-[\w-]+)=(?:"[^"]*"|\{[\s\S]*?\})/g]) {
      assert.deepEqual(current.match(regex), original.match(regex), path);
    }
    const tags = s => [...s.replace(/<!--[\s\S]*?-->/g,'').matchAll(/<\/?([a-zA-Z][\w.-]*)\b/g)].map(m=>m[0]);
    assert.deepEqual(tags(current),tags(original),path);
  }
});
test('section order and original social image are preserved', () => {
  const old = execFileSync('git',['show',`${base}:public/og-default.jpg`]);
  assert.deepEqual(readFileSync('public/og-default.jpg'),old);
  assert.ok(html.indexOf('id="trabalhos"') < html.indexOf('id="servicos"'));
});
test('honest copy and existing anchors are present', () => {
  assert.ok(html.includes('https://barricasindustriais.com/'));
  assert.ok(html.includes('exemplo ilustrativo'));
  assert.ok(!/contato@gladius.digital|R\$|24h|340%|180 leads/.test(html));
  for (const [, id] of html.matchAll(/href="#([^"\s]+)"/g)) assert.ok(html.includes(`id="${id}"`), `missing #${id}`);
});
