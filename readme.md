# resolve-mime

This *npm* module provides a means of resolving any* file extension to its 
respective MIME type.

<sub><sup>* In accordance with all the file extensions currently supported.</sup></sub>

## Installation

```javascript
$ npm install resolve-mime
```

## Usage

In order to use *resolve-mime*, we first need to require it:

```javascript
const mimeOf = require('mime-of').mimeOf
```

Now, we can send in a file extension to the `mimeOf` function, to get back the 
respective MIME type for that file extension:

```javascript
console.log(mimeOf('js'))

// Expected output: application/javascript

console.log(mimeOf('htm'))

// Expected output: application/html

console.log(mimeOf('gif'))

// Expected output: image/gif

console.log(mimeOf('exe'))

// Expected output: application/octet-stream

console.log(mimeOf('unrecognized'))

// Expected output: application/octet-stream
```

Should you prefer to include the period in the file extension, you are free to 
do so:

```
console.log(mimeOf('.js'))

// Expected output: application/javascript
```
