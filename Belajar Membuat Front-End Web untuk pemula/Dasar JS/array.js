// !Array
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[1]);

// *Menambahkan data paling akhir pada index
myArray.push("JavaScript");
myArray.push("PHP");
console.log(myArray);

// *Menghapus data paling akhir dari index
myArray.pop();
console.log(myArray);

// *Menghapus data diindex pertama array
myArray.shift();
console.log(myArray);

// *Menambah elemen di awal array
myArray.unshift("Apple");
console.log(myArray);

// *Menghapus data yang diinginkan dalam array
delete myArray[1];
console.log(myArray);

// *Menhapus dari index 2 sebanyak 1 elemen kebelakang
myArray.splice(2, 2);
console.log(myArray);

let evenNumber = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    evenNumber.push(i);
  }
}
console.log(evenNumber);
