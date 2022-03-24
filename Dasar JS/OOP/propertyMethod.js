// !Property dan Method
// *Property
class Mail {
  // *Private property hanya bisa diakses oleh method di class itu sendiri bukan oleh object yang dibuat
  #contacts = [];
  constructor() {
    // *this bersifat global dan menempel pada object yang dibuat
    this.from = 'pengirim@dicoding.com';
    this.yourOtherProperty = 'the values';
  }
  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    // *this.contacts disini merujuk pada property contacts yang ada di object yang dibuat
    this.#contacts.push(to); // menyimpan kontak baru
  }

  static isValidPhone(phone) {
    return typeof phone === 'number';
  }
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');
// console.log(...mail1.contacts);
// *Method
mail1.sendMessage('Selamat Siang', 'penerima@dicoding.com', 'aku@gmail.com');

// *Static Method bisa diakses langsung dengan class tanpa harus membuat object
console.log(Mail.isValidPhone(089));

class Animal {
  // *Constructor adalah method yang pertama kali dijalankan ketika object dibuat
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log('This animal is ', name);
  }
}

const cat = new Animal('Kucing');
