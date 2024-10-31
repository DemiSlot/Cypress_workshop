/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string): Chainable; 
    getInventory(): Chainable; 
    addToCart(itemId: string): Chainable; 
    checkout(firstName: string, lastName: string, postalCode: string): Chainable; 
  }
}
