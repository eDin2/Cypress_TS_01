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
//import selectors from "../fixtures/appSelectors.json";
import { loginPagePom } from "../interfaceActions/IndexPageSelectors.cy";

//--------------------------------------------------------------
//##############################################################
// Eingabe der Parameter erfolgt über die loginPagePom.action.cy.ts
// field - ist das Inputfeld auf der jeweiligen Page
// text - ist der text der in das jeweilige Inputfeld eingegeben wird
//--------------------------------------------------------------
Cypress.Commands.add("inputTxtInField", (field: string, text: string) => {
  if (!(field in loginPagePom)) {
    throw new Error(`Unsupported Field, please update the statement: ${field}`);
  }

  const fieldSelector = loginPagePom[field];
  cy.get(fieldSelector).should("exist").should("be.visible").type(text);
});


Cypress.Commands.add("clickOnElement", (btnElement: string) => {
  if (!(btnElement in loginPagePom)) {
    throw new Error(
      `Unsupported Btn, please update the statement: ${btnElement}`
    );
  }

  const btnSelector = loginPagePom[btnElement];
  cy.get(btnSelector).should("exist").should("be.visible").click();
});
