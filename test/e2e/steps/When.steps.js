/* eslint-disable prettier/prettier */
import { When } from 'cucumber';
import LoginPage from '../pages/Login.Page';

When(/^I type in (.*) in the email address field$/, email => {
  LoginPage.waitForPageToLoad();
  LoginPage.enterEmail(email);
});

When(/^I type in (.*)in the password field$/, password => {
  LoginPage.enterPassword(password);
});

When(/^I click Login button$/, () => {
  LoginPage.clickLoginButton();
});
