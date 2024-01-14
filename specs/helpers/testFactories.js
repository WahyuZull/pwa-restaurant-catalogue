import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithResto = async (restaurants) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurants,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
