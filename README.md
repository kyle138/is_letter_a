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
is_letter_a('À'); //true
is_letter_a('Á'); //true
is_letter_a('Â'); //true
is_letter_a('Ã'); //true
is_letter_a('Ä'); //true
is_letter_a('Å'); //true
is_letter_a('à'); //true
is_letter_a('á'); //true
is_letter_a('â'); //true
is_letter_a('ã'); //true
is_letter_a('ä'); //true
is_letter_a('å'); //true
is_letter_a('ª'); //true

// Also handles ambiguous situations!
is_letter_a('Æ'); //¯\_(ツ)_/¯
is_letter_a('æ'); //¯\_(ツ)_/¯
```
