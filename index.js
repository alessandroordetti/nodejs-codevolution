const sum = require('./add');
require('./batman');
require('./superman');

const add = sum(4, 5);
const add2 = sum (100, 100);

console.log(add);
console.log(add2);