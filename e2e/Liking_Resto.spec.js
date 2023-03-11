const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Show empty favorite restaurant',  ({ I }) => {
  I.seeElement('.content');
  I.see('Anda belum menambahkan Restaurant Favorite', '.not-found-message');
});

Scenario('Liking one restaurant and Unliking the restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-item-name a', 5);
  I.seeElement('.restaurant-item-name a');

  const firstResto = locate('.restaurant-item-name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  
  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  
  const likedRestoTitle = await I.grabTextFrom('.restaurant-item-name');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.waitForElement('.restaurant-item-name a', 5);
  I.seeElement('.restaurant-item-name a');
  I.click(locate('.restaurant-item-name a').first());
 
  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.content');
  I.see('Anda belum menambahkan Restaurant Favorite', '.not-found-message');
});

Scenario('Add review restaurant', ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant-item-name a', 5);
  I.seeElement('.restaurant-item-name a');
  I.click(locate('.restaurant-item-name a').first());

  I.seeElement('#inputName');
  I.fillField('#inputName', 'Dicoding');
  I.fillField('#inputReview', 'Enak');
  I.click('#submitReview');

  I.seeElement('.review-container');
});
