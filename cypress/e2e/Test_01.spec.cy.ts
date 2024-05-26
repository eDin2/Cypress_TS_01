/// <reference types="cypress" />

describe("template spec", () => {
  it("Visit the Page", () => {
    cy.visit("/");
  });

  it("Input User Name", () => {
    cy.inputTxtInField("Username Field", "standard_user");
  });

  it("Input Password", () => {
    cy.inputTxtInField("Password Field", "secret_sauce");
  });

  it("Click On Login", () => {
    cy.clickOnElement("Login");
  });
});
