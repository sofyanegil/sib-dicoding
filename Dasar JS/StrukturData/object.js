// !Object
// *Membuat object
const user = {
  name: 'Sofyan Egi',
  age: 21,
  isJedi: false,
  'Programming Language': ['Java', 'JS', 'PHP'],
};

// *Menampilkan properti object
console.log(`Halo, nama saya ${user.name} Umur saya ${user.age} tahun`);
console.log(`Bahasa pemrograman yang dikuasai : ${user['Programming Language']}`);

// *Mengubah nilai properti
const motorBebek = {
  name: 'Supra Fit',
  manufacturer: 'Honda Astra',
  maxSpeed: 100,
  color: 'Hitam',
};

motorBebek.color = 'Biru Tua';
motorBebek['maxSpeed'] = 125;
motorBebek['gasoline'] = 'Premium';
delete motorBebek.color;
console.log(motorBebek);
