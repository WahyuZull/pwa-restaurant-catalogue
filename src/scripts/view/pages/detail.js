import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantCategoriesTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDrinkMenuTemplate,
  createRestaurantFoodMenuTemplate,
  createRestaurantReviewsTemplate,
} from '../templates/template-creator';
import AddReviewButton from '../../utils/add-review-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <div class="container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurants = restaurant.restaurant;

    const restaurantContainer = document.querySelector('.container');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);

    const categoriesRestaurant = restaurants.categories;
    categoriesRestaurant.forEach((categorie) => {
      const categoriesContainer = document.querySelector('#resto-categories');
      categoriesContainer.innerHTML += createRestaurantCategoriesTemplate(categorie);
    });

    const foodsMenu = restaurants.menus.foods;
    foodsMenu.forEach((food) => {
      const foodsMenuContainer = document.querySelector('#foods-menu');
      foodsMenuContainer.innerHTML += createRestaurantFoodMenuTemplate(food);
    });

    const drinksMenu = restaurants.menus.drinks;
    drinksMenu.forEach((drink) => {
      const drinksMenuContainer = document.querySelector('#drinks-menu');
      drinksMenuContainer.innerHTML += createRestaurantDrinkMenuTemplate(drink);
    });

    const reviews = restaurants.customerReviews;
    reviews.forEach((review) => {
      const reviewContainer = document.querySelector('#review-container');
      reviewContainer.innerHTML += createRestaurantReviewsTemplate(review);
    });

    const submitReview = document.querySelector('#submitReview');
    submitReview.addEventListener('click', async () => {
      AddReviewButton.init({
        reviewContainer: document.querySelector('#review-container'),
        id: restaurants.id,
      });
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurants: {
        id: restaurants.id,
        name: restaurants.name,
        pictureId: restaurants.pictureId,
        city: restaurants.city,
        rating: restaurants.rating,
      },
    });
  },
};

export default Detail;
