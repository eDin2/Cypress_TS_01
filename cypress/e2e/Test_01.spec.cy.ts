/// <reference types="cypress" />

describe("template spec", () => {
  it("Visit the Page", () => {
    cy.visit("/");
  });

  it("Input User Name in field Username", () => {
    cy.inputTxtInField("usernameField", "standard_user");
    // parameter werden aus loginPagePom.action.cy.ts herangezogen, wenn der Parameter nicht genaus so wie in loginPagePom.action.cy.ts eingegeben wird, wird der selector auch nicht erkannt
  });

  it("Input Password in field Password", () => {
    cy.inputTxtInField("passwordField", "secret_sauce");
  });

  it("Click On Login", () => {
    cy.clickOnElement("Login");
  });
});
