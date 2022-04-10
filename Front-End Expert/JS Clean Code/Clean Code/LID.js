/*
  Prinsip SOLID 
  3. Liskov Substitution Principle
  4. Interface Segregation Principle
  5. Dependency Inversion Principle
*/

// *3. Liskov Substitution Principle
class Vehicle1 {
  constructor() {
    if (this.constructor === Vehicle1) {
      throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
    }
  }

  droveOff() {
    throw new TypeError('Abstract method, cannot be access directly.');
  }

  turnOnEngine() {
    throw new TypeError('Abstract method, cannot be access directly.');
  }
}

class Car extends Vehicle1 {
  droveOff() {
    console.log('Mobil melaju!');
  }

  turnOnEngine() {
    console.log('Mesin Mobil dinyalakan');
  }
}

// !Bad
/*
  Karena sepeda akan mewarisi method turnOnEngine() dari class Vehicle1, yang mana sepeda tidak memiliki mesin
*/
class Bicycle extends Vehicle1 {
  droveOff() {
    console.log('Sepeda melaju!');
  }

  turnOnEngine() {
    // Tunggu, sepeda kan tidak memiliki mesin? Bagaimana cara menyalakannya?
    throw new Error(`${this.constructor.name} don't have an engine`);
  }
}

// *Good
/*
  Ubah method yang ada dikelas abstraksi Vehicele yang tidak relevan dengan instance class
*/
class Vehicle {
  constructor() {
    if (this.constructor === Vehicle) {
      throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
    }
  }

  droveOff() {
    throw new TypeError('Abstract method, cannot be access directly.');
  }
}

class MotorVehicle extends Vehicle {
  constructor() {
    super();
    if (this.constructor === MotorVehicle) {
      throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
    }
  }

  turnOnEngine() {
    throw new TypeError('Abstract method, cannot be access directly.');
  }
}

class Car extends MotorVehicle {
  droveOff() {
    console.log('Mobil melaju!');
  }

  turnOnEngine() {
    console.log('Mesin Mobil dinyalakan');
  }
}

class Bicycle extends Vehicle {
  droveOff() {
    console.log('Sepeda melaju!');
  }
}

// *4. Interface Segregation Principle
/*
 * mengurangi jumlah ketergantungan sebuah class terhadap interface class yang tidak dibutuhkan.
 */
// !Bad
class ImageViewer1 {
  constructor(settings) {
    this._settings = settings;
    this.setup();
  }

  setup() {
    this._image = this._settings.image;
    this._settings.animationModule.setup();
  }

  show() {
    // ...
  }
}

const imageViewer1 = new ImageViewer1({
  image: someImage,
  animationModule: someAnimationModule, // ImageViewer selalu membutuhkan animation Module
});

// *Good
class ImageViewer {
  constructor(settings) {
    this._settings = settings;
    this._options = settings.options;
    this.setup();
  }

  setup() {
    this._image = this._settings.image;
    this.setupOptions();
  }

  setupOptions() {
    if (this._options.animationModule) {
      this._options.animationModule.setup();
    }
    // ...
  }

  show() {
    // ...
  }
}

const imageViewer = new ImageViewer({
  image: someImage,
  options: {
    animationModule: someAnimationModule, // Aman untuk dihapus.
  },
});

// *5. Dependency Inversion Principle
/*
  Dependency Inversion Principle (DIP) adalah Principle yang mengatur komponen yang memiliki dependency dengan komponen yang tidak memiliki dependency.
 */

// !Bad
class SQLDatabase {
  constructor() {
    this.connection = 'SQLConnection';
  }

  requestItem(item) {
    // ....
  }
}

class ProductTracker1 {
  constructor(items) {
    this._items = items;

    // BAD: Kita membuat ketergantungan terhadap low-level.
    // Seharusnya high-level modul tidak boleh tahu low-level itu siapa.
    this._database = new SQLDatabase();
  }

  requestItems() {
    this._items.forEach((item) => {
      this._database.requestItem(item);
    });
  }
}

const productTracker1 = new ProductTracker1(['A011', 'B032', 'F311']);
productTracker.requestItems();

/*
 * Kode di atas melanggar prinsip DIP, karena ProductTracker sebagai high-level module tahu identitas dari low-level module (SQLDatabase). Kode di atas akan sulit untuk dikembangkan karena ProductTracker tidak dapat berfungsi apabila kita ingin menggunakan database selain modul SQLDatabase misalkan.
 */
// *Good
class SQLDatabase {
  constructor() {
    this.connection = 'SQLConnection';
  }

  requestItem(item) {
    // ....
  }
}

class MongoDatabase {
  constructor() {
    this.connection = 'MongoConnection';
  }

  requestItem(item) {
    // ...
  }
}

class ProductTracker {
  constructor(items, database) {
    this._items = items;
    this._database = database;
  }

  requestItems() {
    this._items.forEach((item) => {
      this._database.requestItem(item);
    });
  }
}

const productTracker = new ProductTracker(
  ['A011', 'B032', 'F311'],
  new MongoDatabase() // Good! Sekarang kita bisa gunakan modul low-level apa saja.
);

productTracker.requestItems();
