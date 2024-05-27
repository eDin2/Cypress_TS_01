/// <reference types="cypress" />

describe("template spec", () => {
  it("Visit the Page", () => {
    cy.visit("/");
  });

  it("Input User Name in field Username", () => {
    cy.inputTxtInField("usernameField", "standard_user");
    // TODO: weitere abfragen, überprüfung der Seite auf rchtigkeit etc.
  });

  it("Input Password in field Password", () => {
    cy.inputTxtInField("passwordField", "secret_sauce");
  });

  it("Click On Login", () => {
    cy.clickOnElement("Login");
  });
});
