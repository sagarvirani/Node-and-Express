//Modules - Encapsulated Code (only share minimum)
//CommonJS - every file is a module (by default)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alt-flavor');
require('./7-mind-granade');


sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
console.log(data);