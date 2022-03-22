// !Destructuring Array
const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];

// *Destructuring Assignment
const [, , , fourthFood] = favorites;
console.log(fourthFood);

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(`ini nilai a = ${a}, ini nilai b = ${b}`);

// *Default Values
const favoritos = ['Seafood'];
const [myFood, herFood = 'Salad'] = favoritos;

console.log(myFood);
console.log(herFood);
