/* Example:

const Nitrox = require('nitrox-calc')

node example.js

or with ES6 syntax

import Nitrox from 'nitrox-calc'

node --experimental-modules sample.mjs

*/
const Nitrox = require("./index");

console.log("ATA");
console.log(Nitrox.ata(10));

console.log("Mod");
console.log(Nitrox.mod(1.4, 34));

console.log("FO2");
console.log(Nitrox.fo2(34));

console.log("FN2");
console.log(Nitrox.fn2(34));

console.log("EAN");
console.log(Nitrox.ean(0.34));

console.log("BM");
console.log(Nitrox.bestMix(1.4, 4.4));

console.log("EAD");
console.log(Nitrox.ead(30, 0.68));

console.log("APPO2");
console.log(Nitrox.appO2(2, 0.32));

console.log("EAD");
console.log(typeof Nitrox.ead(30, 0.68));

console.log("APPO2");
console.log(typeof Nitrox.appO2(2, 0.32));
