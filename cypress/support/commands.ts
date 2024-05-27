/// <reference types="cypress" />

/* 
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// } 
*/

import cypress = require("cypress");
//import selectors from "../fixtures/loginPageSelectors.json";
import { loginPagePom } from "../pageObjects/loginPagePom.action.cy";

//--------------------------------------------------------------
//##############################################################
// Eingabe der Parameter erfolgt über die loginPagePom.action.cy.ts
// field - ist das Inputfeld auf der jeweiligen Page
// text - ist der text der in das jeweilige Iputfeld eingegeben wird
//--------------------------------------------------------------
Cypress.Commands.add("inputTxtInField", (field: string, text: string) => {
  if (!(text in loginPagePom)) {
    throw new Error(`Unsported Field, please update the statment: ${text}`);
  }

  const fieldSelector = loginPagePom[field];
  cy.get(fieldSelector).should("exist").type(text);
});

//--------------------------------------------------------------
//##############################################################
Cypress.Commands.add("clickOnElement", (btnElement: string) => {
  if (!(btnElement in loginPagePom)) {
    throw new Error(`Unsported Btn, please update the statment: ${btnElement}`);
  }

  const btnSelector = loginPagePom[btnElement];
  cy.get(btnSelector).should("exist").click();
});
