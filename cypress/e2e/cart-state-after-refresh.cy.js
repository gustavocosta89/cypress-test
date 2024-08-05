// cypress/e2e/cart-state-after-refresh.cy.js
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';

describe('Teste do Estado do Carrinho Após Atualização', () => {
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

  it('deve manter o estado do carrinho após atualizar a página', () => {
    cy.reload();
    cy.url().should('include', '/cart.html');
    cartPage.verifyProductInCart('Sauce Labs Backpack');
  });
});
