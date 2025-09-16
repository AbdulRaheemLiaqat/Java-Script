// math.js
module.exports.add = (a, b) => a + b;
// app.js
const math = require('./math');
console.log(math.add(2, 3));
