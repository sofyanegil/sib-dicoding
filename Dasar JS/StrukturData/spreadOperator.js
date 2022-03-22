// !Spread Operator
const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
const others = ['Cake', 'Pie', 'Donut'];
console.log(...favorites); // == log (favorites[0],favorites[n])

// *Menggabungkan dua nilai array
const allFavo = [...favorites, ...others];
console.log(allFavo);

// *Spread Operator untuk object literals
const id1 = { firstName: 'Sofyan', age: 21 };
const id2 = { lastName: 'Egi', gender: 'M' };

const fullObj = { ...id1, ...id2 };
console.log(fullObj);
