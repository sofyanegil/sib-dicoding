// Arrays bisa diakses menggunakan urutan index
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
console.log("Panjang nilai myArray adalah " + myArray.length + ".\n");

// Objek
let user = {
  name: {
    firstName: "Sofyan",
    lastName: "Egi",
  },
  age: 20,
  isMuggle: false,
  stuff: ["Wand", "Flying Car", "Owl"],
};

console.log("Hallo, nama saya " + user?.name?.firstName + " " + user?.name?.lastName);
console.log("Umur saya " + user.age + " tahun");
