# is_letter_a
Tests if argument is the letter A

## Install
npm install is_letter_a --save

## Usage
```javascript
var is_letter_a = require('is_letter_a');

// Basic usage
is_letter_a('a'); //true
is_letter_a('A'); //true
is_letter_a('b'); //false
is_letter_a('cat'); //false

// Now with international support!
is_letter_a('Ӑ'); //true
is_letter_a('ӑ'); //true
is_letter_a('Ӓ'); //true
is_letter_a('ӓ'); //true
is_letter_a('ª'); //true
is_letter_a('Α'); //true
is_letter_a('α'); //true
is_letter_a('Ά'); //true
is_letter_a('ά'); //true
is_letter_a('Á'); //true
is_letter_a('á'); //true
is_letter_a('Ă'); //true
is_letter_a('ă'); //true
is_letter_a('Ǎ'); //true
is_letter_a('ǎ'); //true
is_letter_a('Â'); //true
is_letter_a('â'); //true
is_letter_a('Ä'); //true
is_letter_a('ä'); //true
is_letter_a('Ǟ'); //true
is_letter_a('ǟ'); //true
is_letter_a('Ȧ'); //true
is_letter_a('ȧ'); //true
is_letter_a('Ǡ'); //true
is_letter_a('ǡ'); //true
is_letter_a('Ȁ'); //true
is_letter_a('ȁ'); //true
is_letter_a('À'); //true
is_letter_a('à'); //true
is_letter_a('Ȃ'); //true
is_letter_a('ȃ'); //true
is_letter_a('Ā'); //true
is_letter_a('ā'); //true
is_letter_a('Ą'); //true
is_letter_a('ą'); //true
is_letter_a('Å'); //true
is_letter_a('å'); //true
is_letter_a('Ǻ'); //true
is_letter_a('ǻ'); //true
is_letter_a('Ⱥ'); //true
is_letter_a('Ã'); //true
is_letter_a('ã'); //true

// Also handles ambiguous situations!
is_letter_a('Æ'); //¯\_(ツ)_/¯
is_letter_a('æ'); //¯\_(ツ)_/¯
is_letter_a('Ǽ'); //¯\_(ツ)_/¯
is_letter_a('ǽ'); //¯\_(ツ)_/¯
is_letter_a('Ǣ'); //¯\_(ツ)_/¯
is_letter_a('ǣ'); //¯\_(ツ)_/¯
```
