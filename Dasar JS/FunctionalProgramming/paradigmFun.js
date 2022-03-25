// !Functional Programming adalah
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMark = [];
// *Imperatif = how to solve
for (let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}
console.log(newNamesWithExcMark);

// *Deklaratif = what to solve
const newNamesWithExcMark2 = names.map((name) => `${name}!`);
console.log(newNamesWithExcMark2);
