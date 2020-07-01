/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

import Page from './Page';

class ShopPage extends Page {
  get buttonAccount() {
    return $(`button[id='HeaderMenu.goToMyAccountButton']`);
  }

  waitForPageToLoad() {
    super.waitForPageToLoad(this.buttonAccount);
  }

  getLoggedInButtonText() {
    return this.getText(this.buttonAccount);
  }
}

export default new ShopPage();
