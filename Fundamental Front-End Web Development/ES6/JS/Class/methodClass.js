// !Method on Class

class Car {
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActicve = false;
  }

  startEngine() {
    console.log("Mesin Dinyalakan");
    this.enginesActicve = true;
  }

  info() {
    console.log(`Manufacture: ${this.manufacture}`);
    console.log(`Color: ${this.color}`);
    console.log(`Engines: ${this.manufacture ? "Active" : "Inactive"}`);
  }
}

const johnCar = new Car("Honda", "Red");
johnCar.startEngine();
johnCar.info();
