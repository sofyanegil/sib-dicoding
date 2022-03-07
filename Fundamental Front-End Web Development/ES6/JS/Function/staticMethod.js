// !Static Method
class Vehicle {
  constructor(licensePlate, manufacture) {
    this.licensePlate = licensePlate;
    this.manufacture = manufacture;
    this.engineActive = false;
  }
}

class Car extends Vehicle {
  constructor(licensePlate, manufacture, type) {
    super(licensePlate, manufacture);
    this.type = type;
  }
}

class Motorcycle extends Vehicle {
  constructor(licensePlate, manufacture, cc) {
    super(licensePlate, manufacture);
    this.cc = cc;
  }
}

class VehicleFactory {
  // Method static
  static repair(vehicles) {
    vehicles.forEach((vehicle) => {
      console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`);
    });
  }
}

const johnCar = new Car("H121S", "Honda", "Jeep");
const tomMotor = new Motorcycle("GF121J", "Yamaha", 250);
const dimasCar = new Car("TA1408K", "Tesla", "Sedan");

/* Pemanggilan method repair langsung dari class-nya tanpa harus mengintansiasi dengan keyword new */
VehicleFactory.repair([johnCar, tomMotor, dimasCar]);
