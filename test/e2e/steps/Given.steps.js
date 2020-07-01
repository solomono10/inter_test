import { Given } from 'cucumber';
import LoginPage from '../pages/Login.Page';

Given(/^I'm on the login page$/, () => {
  LoginPage.open('/login');
});
