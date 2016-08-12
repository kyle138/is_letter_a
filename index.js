module.exports = function(input) {
  switch (input) {
    case 'a': // Latin Small Letter A
    case 'A': // Latin Capital letter A
    case 'À': // Latin Capital Letter A with grave
    case 'Á': // Latin Capital letter A with acute
    case 'Â': // Latin Capital letter A with circumflex
    case 'Ã': // Latin Capital letter A with tilde
    case 'Ä': // Latin Capital letter A with diaeresis
    case 'Å': // Latin Capital letter A with ring above
    case 'à': // Latin Small Letter A with grave
    case 'á': // Latin Small Letter A with acute
    case 'â': // Latin Small Letter A with circumflex
    case 'ã': // Latin Small Letter A with tilde
    case 'ä': // Latin Small Letter A with diaeresis
    case 'å': // Latin Small Letter A with ring above
    case 'ª': // Feminine Ordinal Indicator
      return true;
    case 'Æ': // Grapheme ligature of A and E
    case 'æ': // Grapheme ligature of a and e
      return '¯\\_(ツ)_/¯';
    default:
      return false;
  }
}
