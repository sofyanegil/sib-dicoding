// !IfElse
// *if
const isRaining = true;
console.log('Persiapan sebelum berangkat kegiatan.');
if (isRaining) console.log('Hari ini hujan. Bawa payung.');
console.log('Berangkat kegiatan.');

// *ifElse
let x = 50;
if (x > 70) console.log(x);
else console.log('Nilai kurang dari 70');

// *ifElseif
let language = '';
let greeting = 'Selamat Pagi';

if (language === 'English') greeting = 'Good Morning!';
else if (language === 'French') greeting = 'Bonjour!';
else if (language === 'Japanese') greeting = 'Ohayou Gozaimasu!';
else greeting = 'Give Language';
console.log(greeting);

// *ternary operator
const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);

// *Truthy Falsy
let name = '';
if (name) console.log(`Halo, ${name}`);
else console.log('Nama masih kosong');
