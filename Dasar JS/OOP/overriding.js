// !Overriding is a way to change the behavior of a method or property from a parent class.
class Mail {
  constructor(author) {
    this._contacts = [];
    this.from = author;
  }
  sendMessage(msg, to) {
    this._contacts.push(to);
    return 'you send:', msg, 'to', to, 'from', this.from;
  }
  showAllContacts() {
    return this._contacts;
  }
}

class WhatsApp extends Mail {
  constructor(username, isBussinessAccount, phone) {
    super(phone);
    this.isBussinessAccount = isBussinessAccount;
    this.username = username;
  }
  sendMessage(msg, to) {
    console.log(super.sendMessage(msg, to));
    return 'Send by WA';
  }
}
const wa1 = new WhatsApp('di', true, 089000999888);
console.log(wa1.sendMessage('halo', 089000999888));
