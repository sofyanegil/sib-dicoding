// !Import beberapa nilai dengan object destructur
const { coffeeStock, isCoffeeMakerReady } = require("./state.js");

const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
};

makeCoffee("robusta", 80);
console.log(isCoffeeMakerReady);
