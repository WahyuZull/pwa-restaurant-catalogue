import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createSkeletonTemplate } from '../templates/template-creator';
import '../../component/hero-element';

const Home = {
  async render() {
    return `
    <hero-element></hero-element>
    <div class="content">
      <h1 class="content-title">Cari makan yuk!</h1>
      <div id="restaurants" class="restaurants">
        ${createSkeletonTemplate(20)}
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Home;
