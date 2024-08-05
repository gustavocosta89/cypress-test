import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Navigation Test', () => {
  const loginPage = new LoginPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submitLogin();
    
    cartPage.addProductToCart('Sauce Labs Backpack');
    cartPage.openCart();

    cy.intercept('GET', '/cart.html').as('cartPage');
    cy.wait('@cartPage');
  });

  it('should navigate to the checkout page from the cart page', () => {
    cy.intercept('GET', '/checkout-step-one.html').as('checkoutPage');
    cartPage.proceedToCheckout();
    cy.wait('@checkoutPage');
    cy.url().should('include', '/checkout-step-one.html');
  });
});
