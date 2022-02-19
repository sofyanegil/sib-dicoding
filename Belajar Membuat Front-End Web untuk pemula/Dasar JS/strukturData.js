// !Struktur data
// *Object
const user = {
  firstName: "Sofyan",
  lastName: "Egi",
  age: 20,
  isJedi: true,
  "home world": "Cimahi",
};
// Untuk mengakses objek bisa menggunakan namaObj.key, atau namaObg["key"]
console.log("Halo, nama saya " + user.firstName + " " + user.lastName);
console.log("Umur saya " + user.age + " tahun");
console.log("Saya berasal dari " + user["home world"]);

// Mengubah nilai dari property pada object
const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

// nilai color dan maxSpeed diubah
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
// Karena key class tidak ada sebelumnya maka akan ditambahkan sebagai properti baru di object
spaceship.class = "Light freighter";
// menghapus property
delete spaceship.manufacturer;
console.log(spaceship);
// spaceship = { name: "New Millenium Falcon" }; // Error
