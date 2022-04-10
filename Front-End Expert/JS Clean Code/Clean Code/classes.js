/*
  Classes Clean Code
  - Gunakan ES6 Classes daripada ES5 Function
  - Method Chaining
*/

// *1. Gunakan ES6 Classes daripada ES5 Function
// !Bad
function Car(maxSpeed) {
  if (!(this instanceof Car)) throw new Error('Instantiate Car with `new`');
  this._maxSpeed = maxSpeed;
}

Car.prototype.move = function move() {};
Car.prototype.getMaxSpeed = function getMaxSpeed() {
  return this._maxSpeed;
};

function SportCar(maxSpeed, nitro) {
  if (!(this instanceof SportCar)) throw new Error('Instantiate SportCar with `new`');
  Car.call(this, maxSpeed);
  this._nitro = nitro;
}

SportCar.prototype = Object.create(Car.prototype);
SportCar.prototype.constructor = SportCar;
SportCar.prototype.getMaxSpeed = function getMaxSpeed() {
  return this._maxSpeed + this._nitro;
};
SportCar.prototype.moveWithNitro = function moveWithNitro() {};

function FreightCar(maxSpeed, totalLoad) {
  if (!(this instanceof FreightCar)) throw new Error('Instantiate Car with `new`');
  Car.call(this, maxSpeed);
  this._totalLoad = totalLoad;
}

FreightCar.prototype = Object.create(Car.prototype);
FreightCar.prototype.constructor = FreightCar;
FreightCar.prototype.getMaxSpeed = function getMaxSpeed() {
  return this._maxSpeed - this._totalLoad;
};
FreightCar.prototype.beep = function beep() {};

// *Good
class Car {
  constructor() {
    this._color = null;
    this._manufacture = null;
    this._model = null;
  }

  setColor(color) {
    this._color = color;
    return this;
  }

  setManufacture(manufacture) {
    this._manufacture = manufacture;
    return this;
  }

  setModel(model) {
    this._model = model;
    return this;
  }

  save() {
    console.log(this._color, this._manufacture, this._model);
    return this;
  }
}

class SportCar extends Car {
  constructor(maxSpeed, nitro) {
    super(maxSpeed);
    this._nitro = nitro;
  }

  get maxSpeed() {
    return this._maxSpeed + this._nitro;
  }

  moveWithNitro() {}
}

class FreightCar extends Car {
  constructor(maxSpeed, totalLoad) {
    super(maxSpeed);
    this._totalLoad = totalLoad;
  }

  get maxSpeed() {
    return this._maxSpeed - totalLoad;
  }

  beep() {}
}

// *2. Method Chaining
// !Bad
const car1 = new Car();
car1.setColor('White');
car1.setManufacture('Suzuki');
car1.setModel('Ignis');
car1.save();

// *Good
/*
 Dengan catatan fungsi setter pada Class dengan mengembalikan nilai instance (this).
 */
const car2 = new Car().setColor('White').setManufacture('Suzuki').setModel('Ignis').save();
