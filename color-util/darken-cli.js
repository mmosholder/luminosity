// 'subscribes' to the colorutil.js file with the luminosity and darken function stored in it
var colorutil = require('./colorutil.js');

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

console.log(colorutil.darken(r,g,b));