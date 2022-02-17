// Sebelum ES6, var digunakan untuk membuat variable
var firstName = "Sofyan";
console.log(firstName);

firstName = "Egi";
console.log(firstName);

// Setelah ada ES6 ada let ddan const

x = 100;
// Ini hoisting atau sebenarnya variabel x dibuat sebelum dideklarasikan sebagai var
var x;
console.log(x);

// Let tidak membuat hoisting sehingga harus dideklarasikan sebelum diinisiasi
y = 100;
// let y;
console.log(y);

// Const digunakan untuk mendeklarasikan sebuah variabel yang sifatnya immutable atau tidak perlu dirubah nilainya
const z = 100;
console.log(z);

z = 200;
console.log(z);
