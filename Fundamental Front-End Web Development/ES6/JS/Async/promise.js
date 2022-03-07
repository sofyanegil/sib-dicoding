// !Promise
const executorFunction = (resolve, reject) => {
  const isCoffeMakeReady = true;
  if (isCoffeMakeReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin Kopi tidak bisa digunakan");
  }
};

const makeCoffe = new Promise(executorFunction);
console.log(makeCoffe);
