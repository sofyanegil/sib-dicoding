// !Variable Scope
// *global variable, dapat diakses pada parent() dan child()
const a = 'a';

function parent() {
  //* local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
  const b = 'b';

  function child() {
    //* local variable, dapat diakses hanya pada fungsi child()
    const c = 'c';
  }
}
function multiply(num) {
  hasil = num * num;
  return total;
}
let total = 9;
let number = multiply(20);
console.log(total);
