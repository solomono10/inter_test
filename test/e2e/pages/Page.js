/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

class Page {
  open(url) {
    browser.url(url);
  }

  getText(selector) {
    return selector.getText();
  }

  sendKeys(selector, value) {
    selector.clearValue();
    selector.setValue(value);
  }

  waitForDisplayed(selector, timeout) {
    selector.waitForDisplayed(timeout);
  }

  waitForPageToLoad(selector) {
    if (!selector.isDisplayed()) {
      this.waitForDisplayed(selector, 10000);
    }
  }

  isDisplayed(selector) {
    if (!selector.isDisplayed()) {
      this.waitForDisplayed(selector, 10000);
    }
    return selector.isDisplayed();
  }
}

export default Page;
