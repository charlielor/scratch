'use strict';

// BITWISE operators treat their operands as a sequence of 32 bits rather than other numbers

var a1 = 17; // 00000000 00000000 00000000 00010001
var a2 = 37; // 00000000 00000000 00000000 00100101

// bitwise AND
var a3 = a1 & a2; // 00000000 00000000 00000000 00000001
console.log(a3); // 1

// bitwise OR
var a4 = a1 | a2; // 00000000 00000000 00000000 00110101
console.log(a4); // 53