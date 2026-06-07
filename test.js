import test from 'node:test';
import assert from 'node:assert';
import isLetterA from './index.js';

test('is_letter_a - Standard Behavior (Boolean Mode)', () => {
  // Latin 'A's
  assert.strictEqual(isLetterA('a'), true, "Failed on lowercase Latin 'a'");
  assert.strictEqual(isLetterA('A'), true, "Failed on uppercase Latin 'A'");

  // International variants (Cyrillic & Greek)
  assert.strictEqual(isLetterA('а'), true, "Failed on Cyrillic small letter 'а'");
  assert.strictEqual(isLetterA('Α'), true, "Failed on Greek capital Alpha 'Α'");
  assert.strictEqual(isLetterA('ã'), true, "Failed on Latin small letter A with tilde 'ã'");

  // The Ligature Existential Crisis
  assert.strictEqual(isLetterA('æ'), '¯\\_(ツ)_/¯', "Failed to shrug at 'æ'");
  assert.strictEqual(isLetterA('Ǣ'), '¯\\_(ツ)_/¯', "Failed to shrug at 'Ǣ'");

  // Obvious non-A characters
  assert.strictEqual(isLetterA('b'), false, "Incorrectly identified 'b' as an A");
  assert.strictEqual(isLetterA('Z'), false, "Incorrectly identified 'Z' as an A");
  assert.strictEqual(isLetterA('💩'), false, "Incorrectly identified an emoji as an A");
});

test('is_letter_a - Enterprise Analytics (Verbose Mode)', () => {
  // Check that descriptions are returned properly
  assert.strictEqual(
    isLetterA('Á', { verbose: true }), 
    'Latin Capital letter A with acute'
  );
  
  assert.strictEqual(
    isLetterA('ά', { verbose: true }), 
    'Greek Small Letter Alpha with acute accent'
  );

  assert.strictEqual(
    isLetterA('æ', { verbose: true }), 
    'Grapheme ligature of a and e'
  );

  // Check fallback for a non-A character in verbose mode
  assert.strictEqual(
    isLetterA('Q', { verbose: true }), 
    'Not any kind of A'
  );
});

test('is_letter_a - Defensive Resilience', () => {
  // Ensure the engine doesn't implode if passed non-string garbage
  assert.strictEqual(isLetterA(null), false, "Failed to handle null safely");
  assert.strictEqual(isLetterA(undefined), false, "Failed to handle undefined safely");
  assert.strictEqual(isLetterA(138), false, "Failed to handle a number safely");
  assert.strictEqual(isLetterA(['a']), false, "Failed to handle an array safely");
});