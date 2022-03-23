// !Closure
function init() {
  var name = 'Obi Wan'; // Variabel lokal
  function greet() {
    // Lexical Scope
    console.log(`Halo, ${name}`);
  }
  greet();
}

init();

function initDua() {
  var name = 'Ini Init dua';
  function greet() {
    console.log(`Halo, ${name}`);
  }
  return greet;
}
let myFunction = initDua();
myFunction();

let counter = 0;

let add = () => {
  return ++counter;
};

console.log(add());
console.log(add());
counter = 23;
console.log(add());

let addClosure = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

let addCounter = addClosure();

console.log(addCounter());
counter = 24;
console.log(addCounter());
console.log(addCounter());
