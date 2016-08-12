module.exports = function(input) {
  switch (input) {
    case 'А': // Cyrillic Capital Letter A
    case 'а': // Cyrillic Small Letter A
    case 'Ӑ': // Cyrillic Capital Letter A with breve
    case 'ӑ': // Cyrillic Small Letter A with breve
    case 'Ӓ': // Cyrillic Capital Letter A with diaeresis
    case 'ӓ': // Cyrillic Small Letter A with diaeresis
    case 'ª': // Feminine Ordinal Indicator
    case 'Α': // Greek Capital Letter Alpha
    case 'α': // Greek Small Letter Alpha
    case 'Ά': // Greek Capital Letter A with acute accent
    case 'ά': // Greek Small Letter Alpha with acute accent
    case 'A': // Latin Capital letter A
    case 'a': // Latin Small Letter A
    case 'Á': // Latin Capital letter A with acute
    case 'á': // Latin Small Letter A with acute
    case 'Ă': // Latin Capital Letter A with breve
    case 'ă': // Latin Small Letter A with breve
    case 'Ǎ': // Latin Capital Letter A with caron
    case 'ǎ': // Latin Small Letter A with caron
    case 'Â': // Latin Capital letter A with circumflex
    case 'â': // Latin Small Letter A with circumflex
    case 'Ä': // Latin Capital letter A with diaeresis
    case 'ä': // Latin Small Letter A with diaeresis
    case 'Ǟ': // Latin Capital Letter A with diaeresis and macron
    case 'ǟ': // Latin Small Letter A with diaeresis and macron
    case 'Ȧ': // Latin Capital Letter A with dot above
    case 'ȧ': // Latin Small Letter A with dot above
    case 'Ǡ': // Latin Capital Letter A with dot above and macron
    case 'ǡ': // Latin Small Letter A with dot above and macron
    case 'Ȁ': // Latin Capital Letter A with double grave
    case 'ȁ': // Latin Small Letter A with double grave
    case 'À': // Latin Capital Letter A with grave
    case 'à': // Latin Small Letter A with grave
    case 'Ȃ': // Latin Capital Letter A with inverted breve
    case 'ȃ': // Latin Small Letter A with inverted breve
    case 'Ā': // Latin Capital Letter A with macron
    case 'ā': // Latin Small Letter A with macron
    case 'Ą': // Latin Capital Letter A with ogonek
    case 'ą': // Latin Small Letter A with ogonek
    case 'Å': // Latin Capital letter A with ring above
    case 'å': // Latin Small Letter A with ring above
    case 'Ǻ': // Latin Capital Letter A with ring above and acute
    case 'ǻ': // Latin Small Letter A with ring above and acute
    case 'Ⱥ': // Latin Capital Letter A with stroke
    case 'Ã': // Latin Capital letter A with tilde
    case 'ã': // Latin Small Letter A with tilde
      return true;
    case 'Æ': // Grapheme ligature of A and E
    case 'æ': // Grapheme ligature of a and e
    case 'Ǽ': // Latin Capital Letter Æ with acute
    case 'ǽ': // Latin Small Letter Æ with acute
    case 'Ǣ': // Latin Capital Letter Æ with macron
    case 'ǣ': // Latin Small Letter Æ with macron
      return '¯\\_(ツ)_/¯';
    default:
      return false;
  }
}
