// !Hoisting pada var
function makeTea(isCold) {
  if (isCold) {
    var tea = "Make an Ice Tea!";
  } else {
    var tea = "Make a Hot Tea!";
  }
  return tea;
}
console.log(makeTea(false));

function getFood() {
  // food di hoisting
  food = "choocolate";
  console.log(food);
  var food;
}
getFood();

// !let dan const
function makeTea(isCold) {
  if (isCold) {
    // tea hanya bisa diakses di if else bukan di function block
    let tea = "Make an Ice Tea!";
  } else {
    let tea = "Make a Hot Tea!";
  }
  return tea;
}
console.log(makeTea(false));

function getFood() {
  // food tidak dihoisting karena menggunakan let
  food = "choocolate";
  console.log(food);
  let food;
}
getFood();

// !let maka variabel tersebut dapat diinisialisasi ulang nilainya. Sedangkan const tidak bisa
let name = "John";
name = "Paul";
console.log(name);

const beatle = "Paul";
// beatle = "John";
console.log(beatle);

// !Menginisialisasi ulang
const fruits = ["apple", "orange"];
// fruits = ["apple", "orange", "banana"];
console.log(fruits);

// !Mengubah nilai
fruits.push("banana");
console.log(fruits);

const people = { name: "John", age: 18 };
people.regency = "Bandung";
console.log(people);
