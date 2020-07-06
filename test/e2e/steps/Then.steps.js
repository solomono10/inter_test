/* eslint-disable no-undef */
import { Then } from 'cucumber';
import ShopPage from '../pages/Shop.Page';

Then(/^I'm logged in$/, () => {
  ShopPage.waitForPageToLoad();
  const loggedInConfirmationText = ShopPage.getLoggedInButtonText();
  expect(loggedInConfirmationText).to.equal(`My Account`);
});
