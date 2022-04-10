/*
  Object dan Struktur Data
  - Gunakan Getter dan Setter
*/

// *1. Gunakan Getter dan Setter
// !Bad
class SportCars {
  constructor(maxSpeed, nitro = 100) {
    this.maxSpeed = maxSpeed;
    this.nitro = nitro;
  }
}

const sportCar = new SportCars(320);
console.log(`SportCar mampu melaju hingga kecepatan: ${sportCar.maxSpeed}km/h`);

console.log(`SportCar mampu melaju hingga kecepatan: ${sportCar.maxSpeed + sportCar.nitro}km/h`); // baris kode ini ikut diubah

// *Good
class SportCar {
  constructor(maxSpeed, nitro = 100) {
    this._maxSpeed = maxSpeed;
    this._nitro = nitro;
  }

  get maxSpeed() {
    return this._maxSpeed + this._nitro;
  }
}

const sportCar2 = new SportCar(320);
console.log(`SportCar mampu melaju hingga kecepatan: ${sportCar2.maxSpeed}km/h`);
