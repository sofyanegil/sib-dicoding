// !Property Accessor
class Car {
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this._color = color;
    this.enginesActive = false;
  }

  // Setter Getter
  get color() {
    return `Warna mobil ${this._color}`;
  }

  set color(value) {
    console.log(`Warna mobil diubah dari ${this._color} menjadi ${value}`);
    this._color = value;
  }
}

const johnCar = new Car("Honda", "Red");
console.log(`${johnCar._color}`);
// Mengubah nilai yang sudah dikirim di constructor
johnCar.color = "blue";
console.log(`${johnCar.color}`);
