/**
 * !Concurrency
 * - Gunakakan Promise daripada Callback
 * - Menggunakan Async/Await lebih bersih dari prommises
 */

// *1. Gunakan Promise daripada Callback
// !Bad
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

// *Good
function makeACake(...rawIngredients) {
  gatheringIngredients(rawIngredients).then(makeTheDough).then(pourDough).then(bakeACake).then(console.log);
}

// *2. Menggunakan Async/Await
// !Bad
function makeACake(...rawIngredients) {
  gatheringIngredients(rawIngredients).then(makeTheDough).then(pourDough).then(bakeACake).then(console.log);
}

// *Good
async function makeACake(...rawIngridients) {
  const ingridients = await gatheringIngredients(rawIngridients);
  const dough = await makeTheDough(ingridients);
  const pouredDough = await pourDough(dough);
  const cake = await bakeACake(pouredDough);
  console.log(cake);
}
