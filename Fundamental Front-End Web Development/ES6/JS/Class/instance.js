// !Instance
class Car {
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
  }
}

// Instansiasi dengan keyword new
const johnCar = new Car("Honda", "Red");
const adamCar = new Car("Tesla", "Black");

console.log(johnCar.manufacture);
console.log(adamCar.manufacture);
