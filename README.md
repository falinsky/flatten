# flatten

Flatten provided data (including nested arrays) into a flat array.


## Installation

`npm i @falinsky/flatten`


## Usage

```javascript
const flatten = require('@falinsky/flatten');

console.log(flatten([1, [2, 3], [4, [5]]])); // outputs [1, 2, 3, 4, 5]
```
