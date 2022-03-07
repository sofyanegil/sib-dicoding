// !Inheritance
class Vehicle {
  constructor(licensePlate, manufacture) {
    this.licensePlate = licensePlate;
    this.manufacture = manufacture;
    this.engineActive = false;
  }

  startEngines() {
    this.engineActive = true;
    console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
  }

  info() {
    console.log(`Nomor Kendaraan: ${this.licensePlate}`);
    console.log(`Manufacture: ${this.manufacture}`);
    console.log(`Mesin: ${this.engineActive ? "Active" : "Inactive"}`);
  }

  parking() {
    console.log(`Kendaraan ${this.licensePlate} parkir!`);
  }
}

class Car extends Vehicle {
  constructor(licensePlate, manufacture, wheels) {
    // Super untuk mengakses properti dan method yang ada pada parent class
    super(licensePlate, manufacture);
    this.wheels = wheels;
  }

  droveOff() {
    console.log(`Kendaraan ${this.licensePlate} melaju!`);
  }

  openDoor() {
    console.log(`Membuka pintu!`);
  }

  /* overriding method info dari parent class */
  info() {
    // Override dengan super
    super.info();
    console.log(`Jumlah roda: ${this.wheels}`);
  }
}

const johnCar = new Car("D1234", "Honda", 4);
johnCar.startEngines();
johnCar.info();

const alexCar = new Car("B877", "Mercedes", 4);
alexCar.startEngines();
alexCar.info();
alexCar.openDoor();
