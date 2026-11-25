import test from 'node:test';
import assert from 'node:assert/strict';
import { buildProgrammePath, isNavActive, normalizePath, parseRoute } from './router';

test('normalizePath trims whitespace, query strings, and trailing slashes', () => {
  assert.equal(normalizePath('/'), '/');
  assert.equal(normalizePath('/about/'), '/about');
  assert.equal(normalizePath('/programmes?category=all#top'), '/programmes');
});

test('parseRoute resolves all 8 primary pages and programme detail routes', () => {
  assert.deepEqual(parseRoute('/'), { page: 'home' });
  assert.deepEqual(parseRoute('/about'), { page: 'about' });
  assert.deepEqual(parseRoute('/programmes'), { page: 'programmes' });
  assert.deepEqual(parseRoute('/programmes/pottery-and-ceramics'), {
    page: 'programme-detail',
    programmeSlug: 'pottery-and-ceramics',
  });
  assert.deepEqual(parseRoute('/impact'), { page: 'impact' });
  assert.deepEqual(parseRoute('/gallery'), { page: 'gallery' });
  assert.deepEqual(parseRoute('/news'), { page: 'news' });
  assert.deepEqual(parseRoute('/partnerships'), { page: 'partnerships' });
  assert.deepEqual(parseRoute('/contact'), { page: 'contact' });
});

test('buildProgrammePath and isNavActive handle detail pages correctly', () => {
  assert.equal(buildProgrammePath('fine-arts'), '/programmes/fine-arts');
  assert.equal(isNavActive('programme-detail', 'programmes'), true);
  assert.equal(isNavActive('programme-detail', 'about'), false);
  assert.equal(isNavActive('gallery', 'gallery'), true);
});
