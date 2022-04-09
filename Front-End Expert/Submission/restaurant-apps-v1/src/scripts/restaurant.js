import data from '../DATA.json';

const loadRestaurant = (data) => {
  const restaurantlist = document.querySelector('.restaurant__list');
  restaurantlist.innerHTML = '';
  data.restaurants.forEach((d) => {
    const restaurant = `
    <div class="restaurant" tabindex="0">
      <img loading=lazy src="${d.pictureId}" alt="${d.name} Image" class="restaurant__image" />
      <div class="restaurant__content">
        <p class="restaurant__name">${d.name}</p>
        <div class="restaurant__info">
        <p class="restaurant__location">
          <img src="./src/icons/location.svg" alt="location" width="20px"/>${d.city}
        </p>
        <p class="restaurant__rating"><img src="./src/icons/star.svg" alt="rating"/>${d.rating}</p>
        </div>
        <p class="restaurant__description">${d.description}</p>
      </div>
    </div>
    `;
    restaurantlist.innerHTML += restaurant;
  });
};

loadRestaurant(data);
