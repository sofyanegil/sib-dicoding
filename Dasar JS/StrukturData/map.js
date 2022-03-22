// !Map
const myMap = new Map([
  ['1', 'a String key'],
  [1, 'a number key'],
  [true, true],
]);

console.log(myMap);

// *Mendapatkan nilai dengan get(), dan menambahkan nilai key-value dengan set()
const capital = new Map([
  ['Jakarta', 'Indonesia'],
  ['London', 'England'],
  ['Tokyo', 'Japan'],
]);

console.log(capital.size); //ukuran map
console.log(capital.get('London')); //mengambil value dengan key london
capital.set('New Delhi', 'India'); //menambahkan key-value baru
console.log(capital.size);
console.log(capital.get('New Delhi'));

// *Has &  delete
console.log(capital.has('Jakarta'));
console.log(capital.delete('Jakarta'));
console.log(capital.size);
