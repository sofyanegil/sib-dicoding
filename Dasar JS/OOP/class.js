// !Class
// *Class menggunakan pendekatan prototype
class Mail {
  constructor() {
    this.from = 'pengirim@dicoding.com';
  }

  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  }
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');
console.log(mail1.hasOwnProperty('sendMessage'));
