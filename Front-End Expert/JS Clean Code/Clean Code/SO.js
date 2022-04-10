/*
  Prinsip SOLID 
  1. Single responsibility principle
  2. Open closed principle
*/

// *1. Single responsibility principle
// !Bad
/*
 Class food Service memiliki tanggung jawab menambahkan makanan ke toko dan mengecek kadaluarsa, ini tidak baik 
 */
class FoodService1 {
  constructor(id, name, date) {
    this.id = id;
    this.name = name;
    this.date = date;
  }

  addToStore() {
    if (!this.isExpired()) {
      // Add to store
    }
  }

  isExpired() {
    const stringDateArray = this.date.split('/');
    const foodDate = new Date(...stringDateArray);
    return foodDate >= new Date();
  }
}

/* 
  Pecah menjadi dua class
*/
// *Good
class FoodExpiry {
  static isExpired(date) {
    const stringDateArray = date.split('/');
    const foodDate = new Date(...stringDateArray);
    return foodDate >= new Date();
  }
}

class FoodService {
  constructor(id, name, date) {
    this.id = id;
    this.name = name;
    this.date = date;
  }

  addToStore() {
    if (!FoodExpiry.isExpired(this.date)) {
      // Add to store
    }
  }
}

// *2. Open closed principle

/*
  Terbuka untuk ditambahkan adalah keadaan ketika sebuah sistem dapat ditambahkan dengan spesifikasi baru yang dibutuhkan. 
  
  Sedangkan tertutup untuk dimodifikasi adalah agar ketika ingin menambahkan spesifikasi baru, kita tidak perlu mengubah atau memodifikasi sistem yang telah ada. 
  
  Intinya, prinsip ini mengharuskan pengguna untuk menambahkan fungsionalitas baru tanpa mengubah kode yang sudah dituliskan.
*/
// !Bad
const ShippingType = {
  JNE: 'jne',
  TIKI: 'tiki',
};

class ShippingOrderService {
  checkout(product, type) {
    switch (type) {
      case ShippingType.JNE:
        /** do checkout product with shipping type  */
        break;
      case ShippingType.TIKI:
        /** do checkout product with shipping type  */
        break;
      default:
        throw new TypeError('Unsupported shipping type');
    }
  }
}

/**
 *  Jika terdapat penambahan jenis layanan kita tidak perlu mengubah kode yang ada, buat baru dengan menambahkan layanan yang inheritence dengan class Shipping
 */
// *Good
class Shipping {
  constructor() {
    if (this.constructor === Shipping) {
      throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
    }
  }
  calculate(product) {
    throw new Error('You have to implement the method calculate!');
  }
}

class JNEShipping extends Shipping {
  calculate(product) {
    return /** calculate amount of this type with product */;
  }
}

class TIKIShipping extends Shipping {
  calculate(product) {
    return /** calculate amount of this type with product */;
  }
}

class ShippingOrderService {
  checkout(product, shipping) {
    const costShipping = shipping.calculate(product);
    /** Code to do check */
  }
}
