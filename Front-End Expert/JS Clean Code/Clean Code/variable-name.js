/*
  !Prinsip Membuat Variables
  - Niat
  - Memiliki Arti
  - Mudah diucap
  - Mudah dicari
  - Eksplisit
  - Hindari penambahan kata yang tidak perlu
  - Gunakan default argument
*/

//* 1. Niat
// !Bad
let d; //elapsed time in days
// *Good
let elapsedTimeInDays;

// *2. Memiliki Arti
// !Bad, array1 dan array2 dalam argumen dapat membuat bingung
const makeCapitalSentanc = (array1, array2) => array1.map((item, index) => `${item} is capital of ${array2[index]}`);

// *Good
const makeCapitalSentance = (capitals, countries) => capitals.map((capital, index) => `${capital} is capital of ${countries[index]}`);

// *3. Mudah diucap
// !Bad
const yyyymmdd = moment().format('YYYY/MM/DD');
// *Good
const currentDate = moment().format('YYYY/MM/DD');

// *4. Mudah dicari
// !Bad
// Nilai apakah 86400000 ini?
setTimeout(blastOff, 86400000);
// *Good
// Deklarasikan sebagai constant variabel (gunakan huruf kapital).
const MILLISECONDS_IN_A_DAY = 86_400_000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);

// *5. Eksplisit
// !Bad
const locationss = ['Jakarta', 'Bandung', 'Surabaya', 'Denpasar', 'Sumbawa'];
locations.forEach((l) => {
  doSomeStuff();
  doSomeOtherStuff();
  // tunggu, 'l' itu apa ya?
  dispatch(l);
});

// *Good
const locations = ['Jakarta', 'Bandung', 'Surabaya', 'Denpasar', 'Sumbawa'];
locations.forEach((location) => {
  doSomeStuff();
  doSomeOtherStuff();
  dispatch(location);
});

// *6.Hindari penambahan kata yang tidak perlu
// !Bad
const Carr = {
  carMake: 'Honda',
  carModel: 'Accord',
  carColor: 'Blue',
};
const paintCarr = (car) => (car.carColor = 'Red');

// *Good
const Car = {
  make: 'Honda',
  model: 'Accord',
  color: 'Blue',
};
const paintCar = (car) => (car.color = 'Red');

// *7. Gunakan default argument
// !Bad
const createMicrobreweryy = (name) => {
  const breweryName = name || 'Hipster Brew Co.';
  console.log(breweryName);
};

// *Good
const createMicrobrewery = (name = 'Hipster Brew Co.') => {
  console.log(name);
};
