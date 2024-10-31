/// <reference types="cypress" />

Cypress.Commands.add("login", (username: string, password: string) => {
  return cy.request({
    method: 'POST',
    url: 'https://www.saucedemo.com/v1/login',
    body: { username, password },
    failOnStatusCode: false
  });
});

Cypress.Commands.add("getInventory", () => {
  return cy.request({
    method: 'GET',
    url: 'https://www.saucedemo.com/v1/inventory',
  });
});

Cypress.Commands.add("addToCart", (itemId: string) => {
  return cy.request({
    method: 'POST',
    url: 'https://www.saucedemo.com/v1/cart',
    body: { item_id: itemId }
  });
});

Cypress.Commands.add("checkout", (firstName: string, lastName: string, postalCode: string) => {
  return cy.request({
    method: 'POST',
    url: 'https://www.saucedemo.com/v1/checkout',
    body: {
      first_name: firstName,
      last_name: lastName,
      postal_code: postalCode
    }
  });
});
