// is_letter_a by Kyle138

const Buncha_As = new Map([
  ['А', 'Cyrillic Capital Letter A'],
  ['а', 'Cyrillic Small Letter A'],
  ['Ӑ', 'Cyrillic Capital Letter A with breve'],
  ['ӑ', 'Cyrillic Small Letter A with breve'],
  ['Ӓ', 'Cyrillic Capital Letter A with diaeresis'],
  ['ӓ', 'Cyrillic Small Letter A with diaeresis'],
  ['ª', 'Feminine Ordinal Indicator'],
  ['Α', 'Greek Capital Letter Alpha'],
  ['α', 'Greek Small Letter Alpha'],
  ['Ά', 'Greek Capital Letter A with acute accent'],
  ['ά', 'Greek Small Letter Alpha with acute accent'],
  ['A', 'Latin Capital letter A'],
  ['a', 'Latin Small Letter A'],
  ['Á', 'Latin Capital letter A with acute'],
  ['á', 'Latin Small Letter A with acute'],
  ['Ă', 'Latin Capital Letter A with breve'],
  ['ă', 'Latin Small Letter A with breve'],
  ['Ǎ', 'Latin Capital Letter A with caron'],
  ['ǎ', 'Latin Small Letter A with caron'],
  ['Â', 'Latin Capital letter A with circumflex'],
  ['â', 'Latin Small Letter A with circumflex'],
  ['Ä', 'Latin Capital letter A with diaeresis'],
  ['ä', 'Latin Small Letter A with diaeresis'],
  ['Ǟ', 'Latin Capital Letter A with diaeresis and macron'],
  ['ǟ', 'Latin Small Letter A with diaeresis and macron'],
  ['Ȧ', 'Latin Capital Letter A with dot above'],
  ['ȧ', 'Latin Small Letter A with dot above'],
  ['Ǡ', 'Latin Capital Letter A with dot above and macron'],
  ['ǡ', 'Latin Small Letter A with dot above and macron'],
  ['Ȁ', 'Latin Capital Letter A with double grave'],
  ['ȁ', 'Latin Small Letter A with double grave'],
  ['À', 'Latin Capital Letter A with grave'],
  ['à', 'Latin Small Letter A with grave'],
  ['Ȃ', 'Latin Capital Letter A with inverted breve'],
  ['ȃ', 'Latin Small Letter A with inverted breve'],
  ['Ā', 'Latin Capital Letter A with macron'],
  ['ā', 'Latin Small Letter A with macron'],
  ['Ą', 'Latin Capital Letter A with ogonek'],
  ['ą', 'Latin Small Letter A with ogonek'],
  ['Å', 'Latin Capital letter A with ring above'],
  ['å', 'Latin Small Letter A with ring above'],
  ['Ǻ', 'Latin Capital Letter A with ring above and acute'],
  ['ǻ', 'Latin Small Letter A with ring above and acute'],
  ['Ⱥ', 'Latin Capital Letter A with stroke'],
  ['Ã', 'Latin Capital letter A with tilde'],
  ['ã', 'Latin Small Letter A with tilde']
]); // End Buncha_As

const Maybe_As = new Map([
  ['Æ', 'Grapheme ligature of A and E'],
  ['æ', 'Grapheme ligature of a and e'],
  ['Ǽ', 'Latin Capital Letter Æ with acute'],
  ['ǽ', 'Latin Small Letter Æ with acute'],
  ['Ǣ', 'Latin Capital Letter Æ with macron'],
  ['ǣ', 'Latin Small Letter Æ with macron']
]); // end Maybe_As

/**
 * Validates if a character is an 'A'.
 * @param {string} input - The character to test.
 * @param {Object} [options] - Configuration options.
 * @param {boolean} [options.verbose=false] - If true, returns the character description instead of a boolean.
 * @returns {boolean|string} True/False, a description (if verbose), or a shrug for ligatures.
 */
export default function isLetterA(input, options = {}) {
  const isVerbose = options.verbose === true;

  if (Buncha_As.has(input)) {
    return isVerbose ? Buncha_As.get(input) : true;
  }

  if (Maybe_As.has(input)) {
    return isVerbose ? Maybe_As.get(input) : '¯\\_(ツ)_/¯';
  }

  return isVerbose ? 'Not any kind of A' : false;
}
