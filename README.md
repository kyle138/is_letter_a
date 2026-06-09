# is_letter_a
Tests if argument is the letter A

## Install
npm install is_letter_a --save

## Usage
```javascript
import isLetterA from 'is_letter_a';

// Basic usage
isLetterA('a'); //true
isLetterA('A'); //true
isLetterA('ӓ'); //true
isLetterA('ª'); //true
isLetterA('α'); //true
isLetterA('b'); //false
isLetterA('cat'); //false

// Verbose usage, returns description of A variant.
isLetterA('á', { verbose: true }); // returns 'Latin Small Letter A with acute'
isLetterA('æ', { verbose: true }); // returns 'Grapheme ligature of a and e'
isLetterA('Z', { verbose: true }); // returns 'Not any kind of A'

// Also with international support!
isLetterA('Ӑ'); //true
isLetterA('ӑ'); //true
isLetterA('Ӓ'); //true
isLetterA('ӓ'); //true
isLetterA('ª'); //true
isLetterA('Α'); //true
isLetterA('α'); //true
isLetterA('Ά'); //true
isLetterA('ά'); //true
isLetterA('Á'); //true
isLetterA('á'); //true
isLetterA('Ă'); //true
isLetterA('ă'); //true
isLetterA('Ǎ'); //true
isLetterA('ǎ'); //true
isLetterA('Â'); //true
isLetterA('â'); //true
isLetterA('Ä'); //true
isLetterA('ä'); //true
isLetterA('Ǟ'); //true
isLetterA('ǟ'); //true
isLetterA('Ȧ'); //true
isLetterA('ȧ'); //true
isLetterA('Ǡ'); //true
isLetterA('ǡ'); //true
isLetterA('Ȁ'); //true
isLetterA('ȁ'); //true
isLetterA('À'); //true
isLetterA('à'); //true
isLetterA('Ȃ'); //true
isLetterA('ȃ'); //true
isLetterA('Ā'); //true
isLetterA('ā'); //true
isLetterA('Ą'); //true
isLetterA('ą'); //true
isLetterA('Å'); //true
isLetterA('å'); //true
isLetterA('Ǻ'); //true
isLetterA('ǻ'); //true
isLetterA('Ⱥ'); //true
isLetterA('Ã'); //true
isLetterA('ã'); //true

// Also handles ambiguous situations!
isLetterA('Æ'); //¯\_(ツ)_/¯
isLetterA('æ'); //¯\_(ツ)_/¯
isLetterA('Ǽ'); //¯\_(ツ)_/¯
isLetterA('ǽ'); //¯\_(ツ)_/¯
isLetterA('Ǣ'); //¯\_(ツ)_/¯
isLetterA('ǣ'); //¯\_(ツ)_/¯
```
