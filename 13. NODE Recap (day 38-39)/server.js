const os = require('os');
const path = require('path');

//normal
// const math = require('./math');
// console.log(math.add(2,3))

//destructured
const {add,subtract, multiply, divide} = require('./math')

console.log(add(2,3))
console.log(subtract(2,3))
console.log(multiply(2,3))

// console.log(__dirname);
// console.log(__filename)

// console.log(path.dirname(__filename));

// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename))

