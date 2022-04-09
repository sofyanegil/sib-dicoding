const getFood = async () => {
  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American';
  try {
    const response = await fetch(`${baseUrl}`, { method: 'GET' });
    const food = await response.json();
    loadFood(food.meals);
  } catch (e) {
    throw e;
  }
};

getFood();

const loadFood = (data) => {
  const foodList = document.querySelector('.food__list');
  foodList.innerHTML = '';
  for (let i = 0; i < 8; i++) {
    const food = `
        <div class="food" tabindex="0">
          <img loading=lazy class="food__img" src="${data[i].strMealThumb}" alt="${data[i].strMeal} Image" />
          <div class="food__info">
            <p>${data[i].strMeal}</p>
          </div>
        </div>
      `;
    foodList.innerHTML += food;
  }
};
