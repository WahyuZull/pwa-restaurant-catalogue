import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (resto) => `
  <div class="restaurant-item">
    <div class="restaurant-item-header">
      <picture>
        <source media:all type"image/webp" data-srcset="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <source media:all type"image/jpeg" data-srcset="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <img
          src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
          class="restaurant-item-image"
          loading="lazy"
          alt="${resto.name}"
        />
      </picture>
      <div class="restaurant-item-rating">
        <p>
          <i class="fa fa-star" aria-hidden="true"></i>
          ${resto.rating}
        </p>
      </div>
    </div>
    <div class="restaurant-item-content">
      <h2 class="restaurant-item-name">
        <a href="/#/detail/${resto.id}">${resto.name}</a>
      </h2>
      <p class="restaurant-item-location">
        ${resto.city}
      </p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (resto) => `
  <div class="content-item">
    <picture>
      <source  media:all and (min-width: 961px) type="image/webp" data-srcset="${CONFIG.BASE_IMAGE_URL_LARGE + resto.pictureId}" alt="${resto.name}">
      <source  media:all and (min-width: 961px) type="image/jpeg" data-srcset="${CONFIG.BASE_IMAGE_URL_LARGE + resto.pictureId}" alt="${resto.name}">
      <source  media:all and (min-width: 600px and max-width: 960px) type="image/webp" data-srcset="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" alt="${resto.name}">
      <source  media:all and (min-width: 600px and max-width: 960px) type="image/jpeg" data-srcset="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" alt="${resto.name}">
      <img class="resto-poster" loading="lazy" data-src="${CONFIG.BASE_IMAGE_URL_LARGE + resto.pictureId}" alt="${resto.name}" />
    </picture>
      <!-- Header -->
      <div class="resto-header">
        <h2 class="resto-name">${resto.name}</h2>
        <p class="resto-city">${resto.city}</p>
        <p class="resto-address">${resto.address}</p>
        <p class="resto-categories">Categories</p>
        <div id="resto-categories" class="categories">

        </div>
        <div class="like-rating">
          <div class="resto-rating">
            <i class="fa fa-star" aria-hidden="true"></i>
            <p>${resto.rating}</p>
          </div>
          <div id="likeButtonContainer" class="like-container">
          </div>
          </div>
        </div>
      </div>
  </div>

  <div class="resto-info">
  <!-- Deskripsi -->
  <div class="resto-description">
    <h3>Restaurant Description</h3>
    <p>${resto.description}</p>
  </div>

  <!-- Menu -->
  <div class="resto-menu">
    <h3>Restaurant Menus</h3>
    <div class="menu">
      <div class="foods">
        <h4>Foods</h4>
        <div id="foods-menu" class="foods-menu">

        </div>
      </div>
      <div class="drinks">
        <h4>Drinks</h4>
        <div id="drinks-menu" class="drink-menu">

        </div>
      </div>
    </div>
  </div>

  <!-- Review Resto -->
  <div class="resto-review">
    <h3>Review Customer</h3>
    <div id="review-container" class="review-container">

    </div>
    
    <!-- Add Review -->
    <div class="add-review-container">
      <h3>Add Review</h3>
      <div class="input-name">
        <label for="name" class="label-input-name">Your Name</label>
        <input type="text" aria-label="Input Name" id="inputName"/>
      </div>
      <div class="input-review">
        <label for="review" class="label-input-review">Your Review</label>
        <textarea aria-label="Input Review" id="inputReview"></textarea>
      </div>
      <button id="submitReview" class="submit-review" aria-label="Submit Review">Submit Review</button>
    </div>
  </div>
  
`;

const createRestaurantCategoriesTemplate = (categorie) => `
  <p class="categories-item">${categorie.name}</p>
`;

const createRestaurantFoodMenuTemplate = (food) => `
  <p class="food-item">${food.name}</p>
`;

const createRestaurantDrinkMenuTemplate = (drink) => `
  <p class="drink-item">${drink.name}</p>
`;

const createRestaurantReviewsTemplate = (reviews) => `
  <div class="review-item">
    <div class="review-item-header">
      <i class="fa fa-user" aria-hidden="true"></i>
      <p>${reviews.name}</p>
    </div>
    <p class="review-item-body">${reviews.review}</p>
    <p class="review-item-date">${reviews.date}</p>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createErrorRoutesTemplate = () => `
  <div class="error-page">
    <div class="error-content">
      <picture>
        <source media="all and (max-width: 600px)" type="image/webp" data-srcset="./error.webp">
        <source media="all and (max-width: 600px)" type="image/jpeg" data-srcset="./error.webp">
        <img alt="image-error" src="./error.webp" class="img-error">
      </picture>
      <h2 class="error-title">404</h2>
      <p class="error-message">
        Opps! Halaman tidak dapat ditemukan
      </p>
      <button class="back-home" aria-label="Back to Homepage">
        <a href="/#/home">Kembali ke halaman utama</a>
      </button>
    </div>
  </div>
`;

const createNoFavoriteRestaurantTemplate = () => `
  <div class="resto-item-not-found">
    <p class="not-found-message">
      Anda belum menambahkan Restaurant Favorite
    </p>
  </div>
`;

const createSkeletonTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="restaurant-item">
        <div class="restaurant-item-header">
          <div class="restaurant-item-image skeleton" width="100%" height="200px"/></div>
        </div>
        <div class="restaurant-item-content" height="200px">
          <h2 class="restaurant-item-name skeleton skeleton-text">
          </h2>
          <p class="restaurant-item-location skeleton skeleton-location">
          </p>
        </div>
      </div>
    `;
  } return template;
};

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantCategoriesTemplate,
  createRestaurantFoodMenuTemplate,
  createRestaurantDrinkMenuTemplate,
  createRestaurantReviewsTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createErrorRoutesTemplate,
  createNoFavoriteRestaurantTemplate,
  createSkeletonTemplate,
};
