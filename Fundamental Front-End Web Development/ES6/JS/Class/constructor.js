// !Constructor
class Car {
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
  }
}

const ciivic = new Car("Honda", "Blue");
console.log(ciivic.manufacture);
