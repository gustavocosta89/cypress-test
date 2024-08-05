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
    cy.url().should('include', '/inventory.html');
    productsPage.addProductToCart('Sauce Labs Backpack');
    productsPage.openCart();
    cartPage.verifyProductInCart('Sauce Labs Backpack');
  });

  it('should retain cart state after page refresh', () => {
    cy.reload();
    cy.url().should('include', '/cart.html');
    cartPage.verifyProductInCart('Sauce Labs Backpack');
  });
});
