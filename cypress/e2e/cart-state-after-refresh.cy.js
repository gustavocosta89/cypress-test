// cypress/e2e/cart-state-after-refresh.cy.js

import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';

describe('Cart State After Refresh Test', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submitLogin();
    
    cy.url().should('include', '/inventory.html'); // Verifica se o login foi bem-sucedido

    productsPage.addProductToCart('Sauce Labs Backpack');
    cartPage.openCart();
  });

  it('should retain cart state after page refresh', () => {
    cy.reload();
    
    cy.url().should('include', '/cart.html'); // Verifica se o usuário permanece logado após o refresh

    cy.get('[data-test="shopping-cart-link"]').should('exist');

    cartPage.openCart();
    
    cy.contains('Sauce Labs Backpack').should('exist');
  });
});
