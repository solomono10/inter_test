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
    return super.isDisplayed(this.textLoginError);
  }

  enterEmail(emailAddress) {
    this.sendKeys(this.inputEmail, emailAddress);
  }

  enterPassword(password) {
    this.sendKeys(this.inputPassword, password);
  }

  clickLoginButton() {
    this.buttonLogin.waitForClickable({ timeout: 3000 });
    this.buttonLogin.click();
  }
}

export default new LoginPage();
