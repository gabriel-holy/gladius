import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';

const html = readFileSync('dist/index.html', 'utf8');
const component = readFileSync('src/components/home/About.astro', 'utf8');
const profile = readFileSync('src/data/profile.ts', 'utf8');
const about = html.match(/<section\b[^>]*id="sobre"[\s\S]*?<\/section>/)?.[0];

test('personal introduction sits between how it works and contact', () => {
  assert.ok(about, 'About section is rendered');
  assert.match(about, /Gabriel/);
  assert.match(about, /Arquiteto de software/);
  assert.ok(html.indexOf('id="precos"') < html.indexOf('id="sobre"'));
  assert.ok(html.indexOf('id="sobre"') < html.indexOf('id="contato"'));
  assert.match(about, /aria-labelledby="sobre-titulo"/);
  assert.match(about, /id="sobre-titulo"/);
});

test('portrait is local, responsive, lazy, sized and has descriptive alternative text', () => {
  const image = about.match(/<img\b[^>]*>/)?.[0];
  assert.ok(image);
  assert.match(image, /alt="Gabriel Oliveira, arquiteto de software da Gladius Digital"/);
  assert.match(image, /width="840"/);
  assert.match(image, /height="840"/);
  assert.match(image, /loading="lazy"/);
  assert.match(image, /decoding="async"/);
  assert.match(image, /srcset="[^"]+420w[^"]+630w[^"]+840w"/);
  const source = image.match(/src="([^"]+)"/)[1];
  assert.ok(source.startsWith('/_astro/'));
  assert.ok(existsSync(`dist${source}`));
  assert.ok(statSync(`dist${source}`).size < 100_000);
});

test('LinkedIn is a normal secure link with no third-party embed dependency', () => {
  const url = profile.match(/linkedinUrl:\s*"([^"]*)"/)?.[1];
  if (url) {
    assert.match(url, /^https:\/\/(?:www\.)?linkedin\.com\/in\/[^/?#\s]+\/?$/);
    assert.ok(about.includes(`href="${url}"`));
    assert.match(about, /rel="me noopener noreferrer"/);
    assert.match(about, /target="_blank"/);
    assert.match(about, /abre em nova aba/);
  } else {
    assert.doesNotMatch(about, /href="[^"]*linkedin/);
  }
  assert.doesNotMatch(about, /<iframe|platform\.linkedin\.com|badges\/js/);
  assert.doesNotMatch(component, /<script/);
});

test('profile remains readable without JavaScript and with reduced motion', () => {
  assert.match(component, /<noscript>/);
  assert.match(component, /#sobre \[data-fade-up\].*opacity: 1/);
  assert.match(component, /prefers-reduced-motion: reduce/);
  assert.match(component, /transition: none/);
});
