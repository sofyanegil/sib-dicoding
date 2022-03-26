// !Promise adalah sebuah class yang mengatur proses asynchronous
// !Kondisi promise :
// *1.Pending
// *2.Fulfilled
// *3.Rejected
const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;
  if (isCoffeeMakerReady) resolve('Kopi berhasil dibuat');
  else reject('Mesin kopi tidak bisa digunakan');
};

const makeCoffee = () => {
  return new Promise(executorFunction);
};
const coffeePromise = makeCoffee();
console.log(coffeePromise);
