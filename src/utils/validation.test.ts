import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm } from './validation';

test('validateContactForm rejects empty or invalid submissions', () => {
  const result = validateContactForm({
    fullName: '',
    email: 'invalid-email',
    subject: 'Hi',
    category: '',
    message: 'Short',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.subject);
  assert.ok(result.errors.category);
  assert.ok(result.errors.message);
});

test('validateContactForm accepts valid enquiry payload', () => {
  const result = validateContactForm({
    fullName: 'Chisomo Banda',
    email: 'chisomo@example.org',
    subject: 'Partnership discussion regarding youth workshops',
    category: 'Partnership & Collaboration',
    message: 'We would like to discuss supporting creative skills development in Mtandire Township.',
  });

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});
