// !Destruct Array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// *Destruct dengan nama apa saja asalkan sama dengan urutan pada array
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

// *Menyiapkan local variabel sesuai kebutuhan
const [, , third2nd] = favorites;
console.log(third2nd);

// *Destructuring assignment
let makanBaru = "Ice Cream";
let minumBaru = "Noodles";
let makananGanti = "Rujak";
[satu = makananGanti, dua, tiga, empat, myFood = makanBaru, herFood = minumBaru] = favorites;
console.log(satu, dua, tiga, empat, myFood, herFood);

// *Menukar nilai tanpa variabel pembantu
let a = 1;
let b = 2;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a];

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
