// Tipe data

// * Undefined, sudah dideklarasikan tapi tidak memiliki nilai atau belum di inisialisasi
let x;
console.log(typeof x);

// * Numbers, tipe data untuk angka, desimal
let y = 1;
let z = 3.14;
console.log(typeof y, typeof z);

// *number bisa menggunakan operator aritmatika +,-,/,*,%
console.log(y + z);
console.log(y - z);
console.log(y / z);
console.log(y * z);
console.log(y % z);

// * increment ++, decrement --
let postfix = 5;
console.log(postfix++);
console.log(postfix);

let prefix = 5;
console.log(++prefix);

// *BigInt bisa juga dioperasikan dengan operator aritmatika
const bigNumber = 12345678901234567890123456789012345678901n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

const bigIntButSmall = 7n;
console.log(bigIntButSmall);

// *Strings
let greet = "Hello";
console.log(typeof greet);

let question = '"What do you think of JavaScript?" I asked';
console.log(question);

// Escape string \
const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer);

let moreGreet = greet + greet;
console.log(moreGreet);

// *Boolean
let q = true;
let r = false;

console.log(typeof r);
console.log(typeof q);

const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater);
console.log(isLess);

// *Null, variabel yang sudah dideklarasikan tapi belum diisi nilai
let someLaterData = null;
console.log(someLaterData);

// *Symbol
const id = Symbol("id");
console.log(id);

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);
