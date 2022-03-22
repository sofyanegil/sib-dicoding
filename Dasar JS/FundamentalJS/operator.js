// !Operator
// *Assignment Operator +-/*%
let x = 10;
let y = 5;
x += y;
console.log(x);

// *Comparison Operator ==,!=,===,!==, <, <=, >, >=
let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

// *Perbedaan sama dan identik
const aString = '10';
const aNumber = 10;
console.log(aString == aNumber);
console.log(aString === aNumber);

// *Logical Operator &&, ||, !
let big = 19;
let small = 8;
console.log(small < 15 && big > 10);
console.log(small > 15 && big > 10);

/* OR opersmalltor */
console.log(small < 15 || big > 10);
console.log(small > 15 || big > 10);

/* NOT opersmalltor */
console.log(!(small < 15));
console.log(!(small < 15 && big > 10));
