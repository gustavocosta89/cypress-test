import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Remove from Cart Tests', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submitLogin();
    cy.url().should('include', '/inventory.html');
  });

  it('should remove a product from the cart', () => {
    productsPage.addProductToCart('Sauce Labs Backpack');
    productsPage.removeProductFromCart('Sauce Labs Backpack');
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
