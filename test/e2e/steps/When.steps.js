/* eslint-disable prettier/prettier */
import { When } from 'cucumber';
import LoginPage from '../pages/Login.Page';

When(/^I type in (.*) in the email address field$/, email => {
  LoginPage.waitForPageToLoad();
  LoginPage.enterEmail(email);
});

When(/^I type in (.*)in the password field$/, password => {
  // eslint-disable-next-line no-param-reassign
  password = password.trim();
  LoginPage.enterPassword(password);
});

When(/^I click Login button$/, () => {
  LoginPage.clickLoginButton();
});
