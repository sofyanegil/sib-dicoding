// !Async Await
// !Promises All is used to wait for all promises to be resolved or rejected.
const state = {
  stock: { coffeeBeans: 250, water: 1000 },
  isCoffeeMachineBusy: false,
};

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isCoffeeMachineBusy) resolve('Mesin kopi siap digunakan.');
      else reject('Maaf, mesin sedang sibuk.');
    }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    state.isCoffeeMachineBusy = true;
    setTimeout(() => {
      if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) resolve('Stok cukup. Bisa membuat kopi.');
      else reject('Stok tidak cukup!');
    }, 1500);
  });
};

const brewCoffee = () => {
  console.log('Membuatkan kopi Anda...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Kopi sudah siap!');
    }, 2000);
  });
};

const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log('Memanaskan air...');
    setTimeout(() => {
      resolve('Air panas sudah siap!');
    }, 9000);
  });
};

const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log('Menggiling biji kopi...');
    setTimeout(() => {
      resolve('Kopi sudah siap!');
    }, 1000);
  });
};

async function makeEspresso() {
  try {
    const status = await checkAvailability();
    console.log(status);
    const stockStatus = await checkStock();
    console.log(stockStatus);
    await Promise.all([boilWater(), grindCoffeeBeans()]);
    const coffee = await brewCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}
makeEspresso();
