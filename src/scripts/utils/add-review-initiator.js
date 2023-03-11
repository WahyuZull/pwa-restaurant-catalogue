import RestaurantSource from '../data/restaurant-source';
import { createRestaurantReviewsTemplate } from '../view/templates/template-creator';

const AddReviewButton = {
  async init({ reviewContainer, id }) {
    this._reviewContainer = reviewContainer;
    this._id = id;
    await this._addReview(this._id);
  },

  async _addReview(restoId) {
    const inputName = document.querySelector('#inputName');
    const inputReview = document.querySelector('#inputReview');
    if (inputName.value === '' || inputReview.value === '') {
      Swal.fire({
        text: 'Kolom tidak boleh kosong!',
        icon: 'warning',
      });
    } else {
      const newReview = {
        id: restoId,
        name: inputName.value,
        review: inputReview.value,
      };

      const result = await RestaurantSource.addReview(newReview);
      const { customerReviews } = result;

      this._reviewContainer.innerHTML = customerReviews.map(
        (review) => createRestaurantReviewsTemplate(review),
      ).join('');
    }
  },
};

export default AddReviewButton;
