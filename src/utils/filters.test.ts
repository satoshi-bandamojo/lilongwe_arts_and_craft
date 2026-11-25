import test from 'node:test';
import assert from 'node:assert/strict';
import { PROGRAMMES } from '../data/programmes';
import { GALLERY_ITEMS } from '../data/gallery';
import { filterGalleryItems, filterProgrammes } from './filters';

test('PROGRAMMES dataset contains exactly 14 named disciplines', () => {
  assert.equal(PROGRAMMES.length, 14);
});

test('filterProgrammes filters by category group and search query', () => {
  const all = filterProgrammes(PROGRAMMES, 'All');
  assert.equal(all.length, 14);

  const fashion = filterProgrammes(PROGRAMMES, 'Fashion & Design');
  assert.equal(fashion.length, 4);

  const potterySearch = filterProgrammes(PROGRAMMES, 'All', 'clay');
  assert.equal(potterySearch.length, 1);
  assert.equal(potterySearch[0].slug, 'pottery-and-ceramics');
});

test('filterGalleryItems filters by gallery category cleanly', () => {
  const all = filterGalleryItems(GALLERY_ITEMS, 'All');
  assert.equal(all.length, GALLERY_ITEMS.length);

  const basketry = filterGalleryItems(GALLERY_ITEMS, 'Basketry');
  assert.equal(basketry.length, 1);
  assert.equal(basketry[0].category, 'Basketry');
});
