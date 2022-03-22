// !Tipe Data
// *Undefined
let dataUndefined;
console.log(typeof dataUndefined);

// *Numbers bisa melakukan operasi +-/*%**
let dataNumber = 10 ** 2;
console.log(typeof dataNumber);

let postfix = 5;
console.log(postfix++);
console.log(postfix);

let prefix = 5;
console.log(++prefix);

// *BigInt bisa dilakukan operasi aritmatika
let dataBigInt = 234567890123456789012345678901234567890n;
console.log(dataBigInt / 100000000000000000000n);

// *Strings
const dataString = 'Ini Data String';
console.log(typeof dataString);
// Escape string
const level = 'hard';
const answer = `I think it's awesome ${level}!" he answered confidently`;
console.log(answer);

// *Boolean
let dataBoolean = true;
console.log(typeof dataBoolean);

let besar = 8;
let kecil = 6;
console.log(kecil < besar);

// *Null
let dataNull = null;
console.log(dataNull);

// *Symbol
const id = Symbol('uk');
const id2 = Symbol('uk');

console.log(id == id2);
