/// <reference types="cypress" />

import selectors from "../fixtures/selectors.json";

interface ButtonSelectors {
  [key: string]: string;
}

export const loginPage: ButtonSelectors = {
  // Inputfield
  "Username Field": selectors.INPUT_FIELD.inputUserNameField,
  "Password Field": selectors.INPUT_FIELD.inputPasswordField,

  // User
  standard_user: selectors.USERS.userName,

  // Password
  secret_sauce: selectors.PASSWORD.passWord,

  // Buttons
  Login: selectors.BUTTONS.loginBtn,
};
