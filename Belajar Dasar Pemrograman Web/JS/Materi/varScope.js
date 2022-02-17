// global variable, dapat diakses pada parent() dan child()
// local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
// local varible, dapat diakses hanya pada fungsi child().

function multiply(num) {
  // jika tidak menggunakan let atau var maka dia akan menjadi variabel global dan mengisi nilai variabel dengan nama yang sama
  total = num * num;
  return total;
}

let total = 9;
let number = multiply(20);
// Nilai total sekarang menjadi 400
console.log(total);
