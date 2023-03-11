import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate, createNoFavoriteRestaurantTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content-title">Resto Favorite Anda</h2>
        <div id="restaurants" class="restaurants">
        
        </div>
      </div>
    `;
  },
  async afterRender() {
    const restaurantFavorite = await FavoriteRestoIdb.getAllResto();
    if (!restaurantFavorite.length) {
      const content = document.querySelector('.content');
      content.innerHTML += createNoFavoriteRestaurantTemplate(restaurantFavorite);
    } else {
      const restaurantFavoriteContainer = document.querySelector('#restaurants');
      restaurantFavorite.forEach((restaurant) => {
        restaurantFavoriteContainer.innerHTML = createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
