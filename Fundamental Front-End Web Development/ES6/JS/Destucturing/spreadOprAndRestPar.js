// !Spreading Operator
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(favorites);
console.log(...favorites);

const numbers = [12, 32, 90, 12, 32];
console.log(Math.max(...numbers));

// *Untuk menggabungkan nilai dari 2 array
const others = ["Cake", "Pie", "Donut"];
const allFavorites = [...favorites, ...others];
console.log(allFavorites);

// !Rest Parameter
function sum(...numbers) {
  var result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 5));

// *Digunakan juga untuk destructur arr
const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];
const [manufacture, weight, door, ...items] = refrigerator;

console.log(manufacture);
console.log(weight);
console.log(door);
console.log(items);
