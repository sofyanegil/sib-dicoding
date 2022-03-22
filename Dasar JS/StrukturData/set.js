// !Set
// *Data unik walaupun duplikat tetap dianggap 1value
const numberSet = new Set([1, 1, 1, 2, 4, 5, 2, 4, 2, 3]);
console.log(numberSet);
numberSet.add(997);
console.log(numberSet);
numberSet.delete(2);
console.log(numberSet);
