// !Operator komparasi
// ==,!=,===,!==, >, >=, <, <=
let as = 10;
let bs = 12;
console.log(as < bs);
console.log(as > bs);

// == Sama , === Identik
const aString = "10";
const aNumber = 10;
console.log(aString == aNumber); // true, karena nilainya sama-sama 10
console.log(aString === aNumber); // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

// *Logical Operator
// && and, || or, ! not
let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false
