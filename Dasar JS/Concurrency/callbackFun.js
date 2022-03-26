// !Callback Functions adalah sebuah fungsi yang akan mengirimkan sebuah pesan setelah waktu tertentu
const orderCoffee = (callback) => {
  let coffee = null;
  console.log('Sedang membuat kopi, silakan tunggu...');
  setTimeout(() => {
    coffee = 'Kopi sudah jadi!';
    callback(coffee);
  }, 3000);
};

orderCoffee((coffee) => {
  console.log(coffee);
});

// !Callback Hell adalah sebuah kode yang memiliki banyak callback function
function makeACake(...rawIngredients) {
  collectIngredients(rawIngredients, function (ingredients) {
    makeTheDough(ingredients, function (dough) {
      pourDough(dough, function (pouredDough) {
        bakeACake(pourDough, function (cake) {
          console.log(cake);
        });
      });
    });
  });
}

// !Solusi
function makeACake2(...rawIngredients) {
  collectIngredients(rawIngredients).then(makeTheDough).then(pourDough).then(bakeACake).then(console.log);
}
