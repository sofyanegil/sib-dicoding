// !callBack Function
const getCake = (callback) => {
  let cake = null;
  console.log("Sedang membuat kue, silakan tunggu ....");
  setTimeout(() => {
    cake = "Kue Selesai!";
    callback(cake);
  }, 10000);
};

getCake((cake) => {
  console.log(cake);
});

// *CallBack Hell
function makeACake(...rawIngredients) {
  gatheringIngredients(rawIngredients, function (ingridients) {
    makeTheDough(ingridients, function (dough) {
      pourDough(dough, function (pouredDough) {
        bakeACake(pouredDough, function (cake) {
          console.log(cake);
        });
      });
    });
  });
}

// *Solusi Callback hell
rawIngredients = ["Flour", "choco", "chese"];
function makeACake(...rawIngredients) {
  gatheringIngredients(rawIngredients)
    .then(makeTheDough)
    .then(pourDough)
    .then(bakeACake)
    .then(console.log(...rawIngredients));
}
