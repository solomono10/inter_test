/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
import Page from './Page';

class LoginPage extends Page {
  get inputEmail() {
    return $(`[data-e2e='emailAddress']`);
  }

  get textLoginError() {
    return $(`div.loginBox__login > p > span.log-error`);
  }

  get inputPassword() {
    return $(`[data-e2e='password']`);
  }

  get buttonLogin() {
    return $(`button[data-e2e='login']`);
  }

  waitForPageToLoad() {
    super.waitForPageToLoad(this.inputEmail);
  }

  getLoginErrorText() {
    return this.getText(this.textLoginError);
  }

  isLoginErrorTextDisplayed() {
    return this.isDisplayed(this.textLoginError);
  }

  enterEmail(emailAddress) {
    this.sendKeys(this.inputEmail, emailAddress);
  }

  enterPassword(password) {
    this.sendKeys(this.inputPassword, password);
  }

  isDisplayed(selector) {
    if (!selector.isDisplayed()) {
      this.waitForDisplayed(selector, 10000);
    }
    return selector.isDisplayed();
  }

  clickLoginButton() {
    if (this.isClickable(this.buttonLogin)) {
      this.buttonLogin.click();
    }
  }
}

export default new LoginPage();
