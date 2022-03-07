// !Template literal
const user = {
  firstName: "Sofyan",
  lastName: "Egi",
  age: 20,
};
const message = "Nama: " + user.firstName + " " + user.lastName + ", Umur: " + user.age;
console.log(message);

// !Dengan template literal
console.log(`Nama: ${user.firstName} ${user.lastName},Umur : ${user.age}. 

Ini menggunakan template literal`);
