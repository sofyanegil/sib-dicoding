// !Arrow Function
// *Regular Funtion
const regularFun = ["Dimas", "Widy", "Buchori"].map(function (name) {
  return name.toUpperCase();
});
console.log(...regularFun);

// *Arrow Function
const arrFun = ["Dimas", "Widy", "Buchori"].map((name) => name.toUpperCase());
console.log(...arrFun);

// *Arrow Func bisa disimpan di variabel
const sayName = (name) => console.log(`Nama saya ${name}`);
sayName("Sofyan");

// *Arraw Func bisa digunakan untuk argument
["Dimas", "Widdy", "Buchori"].forEach((name) => console.log(`Nama saya ${name}`));

// *Arrow Func bisa disimpan sebagai properti object
const user = {
  introduce: (name) => console.log(`Nama saya ${name}`),
};
user.introduce("Egi");
