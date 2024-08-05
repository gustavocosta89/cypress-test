import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';

describe('Products Page Tests', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submitLogin();
    cy.url().should('include', '/inventory.html');
    productsPage.verifyPageTitle();
  });

  it('should display a list of products', () => {
    productsPage.verifyAllProductsVisible();
  });

  it('should add a product to the cart', () => {
    productsPage.addProductToCart('Sauce Labs Backpack');
    cy.get('.shopping_cart_badge', { timeout: 10000 }).should('contain.text', '1');
  });

  it('should remove a product from the cart', () => {
    productsPage.addProductToCart('Sauce Labs Backpack');
    productsPage.removeProductFromCart('Sauce Labs Backpack');
    productsPage.verifyCartIsEmpty();
  });

  it('should verify the product is added to the cart', () => {
    productsPage.addProductToCart('Sauce Labs Backpack');
    productsPage.openCart();
    cartPage.verifyProductInCart('Sauce Labs Backpack');
  });

  it('should check product details', () => {
    productsPage.getProductList().first().should('be.visible');
  });
});
