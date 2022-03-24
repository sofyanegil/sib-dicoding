// !Pilar OOP

// *Encapsulation adalah
class Mail {
  constructor(author) {
    this._contacts = [];
    this.from = author;
  }
  sendMessage = function (msg, to) {
    console.log('you send:', msg, 'to', to, 'from', this.from);
    this._contacts.push(to);
  };
  showAllContacts() {
    return this._contacts;
  }
}

const email1 = new Mail('sofyanegi');
const email2 = new Mail('andrea');
email1.sendMessage('hallo', 'andi');
console.log(email1.showAllContacts());

// *Abstraction adalah
// *Inheritance is a process of creating a new class from an existing class.
class WhatsApp extends Mail {
  constructor() {
    super();
    this.username = 'dicoding';
    this.isBussinessAccount = true;
  }
  myProfile() {
    return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
  }
}

const wa1 = new WhatsApp(080111000222);
console.log(wa1.myProfile());
wa1.sendMessage('hello', 'andi');

// *Polymorphism is a process of using the same method name in different classes.
