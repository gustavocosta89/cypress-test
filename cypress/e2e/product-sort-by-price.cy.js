// cypress/e2e/product-sort-by-price.cy.js

import ProductsPage from '../pages/ProductsPage';

describe('Product Sort by Price Test', () => {
  const productsPage = new ProductsPage();

  beforeEach(() => {
    cy.visit('/'); // Visita a página inicial

    // Realiza o login
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html'); // Verifica a URL
  });

  it('should sort products by price low to high', () => {
    // Seleciona a opção de ordenação por preço
    productsPage.sortByPriceLowToHigh();

    // Verifica se os produtos estão ordenados por preço de forma crescente
    productsPage.verifyProductsSortedByPriceLowToHigh();
  });
});
