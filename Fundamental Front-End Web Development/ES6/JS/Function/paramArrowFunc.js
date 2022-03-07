// !Parameter Arrow Function
// *Tanpa Parameter
const sayHalo = () => console.log("Selamat pagi semuanya!");
sayHalo();

// *Satu Parameter
const sayName = (name) => console.log(`Nama Saya ${name}`);
sayName("Egi");

// *Beberapa Parameter
const sayHello = (name, greet) => console.log(`${greet}, ${name}!`);
sayHello("Egi", "Selamat Pagi");

// !Block Body Function
const hello = (language) => {
  if (language.toUpperCase() === "INDONESIA") return "Selamat Pagi!";
  else return "Good Morning!";
};

console.log(hello("indonesia"));
