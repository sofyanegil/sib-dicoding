// !Destructuring Object
const profile = {
  firstName: "Sofyan",
  lastName: "Egi",
  age: 20,
};

// *Destructuring dengan ES6 {obj}
// const { firstName, lastName, age } = profile;
// console.log(firstName, lastName, age);

// *Destructuring Assignment
let firstName = "Lesmana";
let age = 21;

// Menginisialisasi nilai baru melalui object destructuring
// Assignnebt ke local Variabel
const { firstName: localFirstName, lastName: localLastName, age: localAge, localIsMale = true } = profile;
console.log(localFirstName, localAge, localLastName, localIsMale);
