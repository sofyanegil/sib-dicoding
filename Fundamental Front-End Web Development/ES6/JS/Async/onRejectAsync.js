// !onRejected menggunakan async/await

const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 10;
    setTimeout(() => {
      if (seeds >= 10) {
        resolve("Coffee didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  });
};
// *await hanya akan mengembalikan nilai jika promise onFulfilled, maka kita gunakan try and catch
async function makeCoffee() {
  try {
    const coffee = await getCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeCoffee();
