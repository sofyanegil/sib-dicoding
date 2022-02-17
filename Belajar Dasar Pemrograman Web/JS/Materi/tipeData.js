// !Tipe data di JS

// * undefined, atau ketika sebuah variabel tidak memiliki nilai
let un;
// fun typeof digunakan untuk mengecek tipe data sebuah variabel
console.log(typeof un);

// * Number atau tipe data angka
let angka = 10;
console.log(typeof angka);

// Decimal juga termasuk tipe data number
let decimal = 17.25;
console.log(typeof decimal);

// Operator yang bisa digunakan untuk number (+,-,/,*,%)
let angka1 = 12;
let angka2 = 9;

console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 * angka2);
console.log(angka1 / angka2);
console.log(angka1 % angka2);

// Increment dan Decrement

let postFix = 5;
console.log(postFix++);

let prefix = 5;
console.log(++prefix);

// *String
let greet = "Hello";
console.log(typeof greet);

let moreGreet = greet + greet;
console.log(moreGreet);

// *Boolean
let benar = true;
let salah = false;

console.log(typeof benar);
console.log(typeof salah);

// Atau boolean didapatkan dengan menggunakan operator komparasi
const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater);
console.log(isLess);

// * null sasma seperti undefined tetapi null perlu diinisialisasi

let someLaterData = null;
console.log(someLaterData);

// Tipe data menjadi dinamis sesuai dengan isi-nya
let x; // x merupakan undefined
x = 1; // sekarang x merupakan number
x = true; // sekarang x merupakan boolean
x = "Harry"; // sekarang x merupakan string
