/*
  !Membuat Function dengan Baik
  - Argumen Fungsi
  - Melakukan satu hal
  - Nama fungsi harus merepresentasikan sebuah tujuannya
  - Fungsi harus memiliki satu tingkatan abstraksi
  - Usahakan functional programming daripada imperative programming
  - Enkapsulasikan kondisional
  - Hindari Negasi kondisional
  - Minimalisir kondisional
*/

// *1. Argumen Fungsi
/*
  1-2 Argumen merupakan ideal pada sebuah fungsi
*/
// !Bad
const createMenus = (title, body, buttonText, cancellable) => console.log(title, body, buttonText, cancellable);

createMenus('Foo', 'Bar', 'Baz', true);

// *Good
/*
  Gunakan object jika terdapat banyak argumen, karena :
  1. Jelas terlihat nilai yang dibutuhkan parameter fungsi
  2. named parameter
  3. Mencegah kesalahan
  4. ESLint dapat menyarankkan properti yang tidak digunakan
*/
const createMenu = ({ title, body, buttonText, cancellable }) => console.log(title, body, buttonText, cancellable);
createMenu({ title: 'Foo', body: 'Bar', buttonText: 'Baz', cancellable: true });

// *2. Melakukan satu hal
/*
  Fungsi melakukan banyak hal, akan sulit disusun dan diuji, tidak memiliki tujuan yang jelas
*/
// !Bad
function emailClients(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}

// *Good
/*
  Pecah menjadi beberapa fungsi
*/
function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}

function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

// *3. Nama fungsi harus merepresentasikan sebuah tujuannya
// !Bad
/* 
  Tidak jelas apa yang ditambahkan pada tanggal, apakah bulan, hari, jam ?
*/
const addToDate = (date, month) => console.log(date, month);
const date = new Date();
addToDate(date, 1);

// *Good
/*
  Jelas bulan ditambahkan pada tanggal
*/
const addMonthToDate = (month, date) => {};
addMonthToDate(1, date);

// *4. Fungsi harus memiliki satu tingkatan abstraksi
// !Bad
function sendNotification(payload) {
  const pushNotificationManager = new PushNotificationManager();
  const tokens = [];
  pushNotificationManager.getClients().forEach((client) => {
    tokens.push(client.token);
  });

  const payloadFormatter = new PayloadFormatter();
  const formattedPayload = payloadFormatter.format(payload);

  const notificationBuilder = new NotificationBuilder(formattedPayload, tokens).build();
  notificationBuilder.sendNotification();
}

/*
  Pecah agar memiliki abtraksi yang sama
*/
// *Good
function tokenize() {
  const pushNotificationManager = new PushNotificationManager();
  const tokens = [];
  pushNotificationManager.getClients().forEach((client) => {
    tokens.push(client.token);
  });
  return tokens;
}

function formatPayload(payload) {
  const payloadFormatter = new PayloadFormatter();
  return payloadFormatter.format(payload);
}

function sendNotification(payload) {
  const tokens = tokenize();
  const formattedPayload = formatPayload(payload);
  const notificationBuilder = new NotificationBuilder(formattedPayload, tokens).build();
  notificationBuilder.sendNotification();
}

// *5. Usahakan functional programming daripada imperative programming
const albums = [
  { name: '25', singer: 'Adele', sold: 1500000 },
  { name: 'Changes', singer: 'Justin Biebier', sold: 700000 },
  { name: 'Songs About Jane', singer: 'Maroon 5', sold: 1250000 },
  { name: 'Mylo Xyloto', singer: 'Coldplay', sold: 980000 },
];
const SALES_TARGET = 1000000;
const greatSinger = [];

// !Bad
for (let i = 0; i < albums.length; i++) {
  if (albums[i].sold > SALES_TARGET) {
    greatSinger.push(albums[i].singer);
  }
}

// *Good
const greatSingers = albums.filter((album) => album.sold > SALES_TARGET).map((filteredAlbum) => filteredAlbum.singer);

// *6. Enkapsulasikan kondisional
// !Bad
if (request.state === 'loading' && isEmpty(listNode)) {
  // show spinner
}

// *Good
const shouldShowLoading = (response, listNode) => {
  return response.state === 'loading' && isEmpty(listNode);
};

if (shouldShowLoading(response, listNode)) {
  // show loading.
}

// *7. Hindari Negasi kondisional
// !Bad
const shouldNotShowLoading = (response, listNode) => {
  return response.state !== 'loading' && !isEmpty(listNode);
};

if (!shouldNotShowLoading(response, listNode)) {
  // show loading.
}

// *Good
const shouldShowLoadings = (response, listNode) => {
  return response.state === 'loading' && isEmpty(listNode);
};

if (shouldShowLoadings(response, listNode)) {
  // show loading.
}

// *8. Minimalisir kondisional
// !Bad
class Cars {
  // ....
  getActualMaxSpeed() {
    switch (this.type) {
      case 'sport':
        return this.maximalSpeed + this.nitrosSpeed;
      case 'freight':
        return this.maximalSpeed - this.totalLoad;
      default:
        return this.maximalSpeed;
    }
  }
}

// *Good
class Car {
  // .....
  getActualMaxSpeed() {
    return this.maxSpeed;
  }
}

class SportCar extends Car {
  // ....
  getActualMaxSpeed() {
    return this.maxSpeed + this.nitrosSpeed;
  }
}

class FreightCar extends Car {
  // ...
  getActualMaxSpeed() {
    return this.maxSpeed - this.totalLoad;
  }
}
