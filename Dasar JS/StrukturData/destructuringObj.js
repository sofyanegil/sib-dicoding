// !Destructuring Object
let profil = {
  namaDepan: 'Sofyan',
  namaBelakang: 'Egi',
  umur: 20,
};

// *Destuct Assignment
let { namaDepan, namaBelakang, umur } = profil;
console.log(namaBelakang);

({ namaDepan, umur, isMale = true } = profil);
console.log(namaDepan);

console.log(isMale);
console.log(profil);

({ namaDepan: localnamaDepan, namaBelakang: localnamaBelakang, umur: localumur } = profil);

console.log(localnamaDepan);
console.log(localnamaBelakang);
console.log(localumur);
