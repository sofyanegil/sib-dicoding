// !Onrejected menggunakan Catch Method
const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = false;
  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin Kopi tidak bisa digunakan!");
  }
};

// *onFulfilled
const handlerSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

// *onRejected
const handlerRejected = (rejectionReason) => {
  console.log(rejectionReason);
};

// *Menggunakan Catch
const makeCoffee = new Promise(executorFunction);
makeCoffee.then(handlerSuccess).catch(handlerRejected);
