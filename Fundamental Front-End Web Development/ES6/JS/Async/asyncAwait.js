//!Async Await
// *Tidak bisa digunakan jika tidak ada promise
const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 0;
    setTimeout(() => {
      if (seeds >= 10) {
        resolve("Coffee didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  });
};

// *Tanpa Async
// function makeCoffee() {
//   getCoffee().then((coffee) => {
//     console.log(coffee);
//   });
// }

// *Dengan Async
async function makeCoffee() {
  // menghentikan proses pembacaan kode sampai fungsi getCoffe mengembalikan nilai promise
  const coffee = await getCoffee();
  // Await hanya bisa digunakan didalam function yang berjalan secara async
  console.log(coffee);
}

makeCoffee();
