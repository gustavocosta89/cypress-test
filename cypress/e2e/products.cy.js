import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';

describe('Testes da Página de Produtos', () => {
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

  it('deve exibir uma lista de produtos', () => {
    productsPage.verifyAllProductsVisible();
  });

  it('deve adicionar um produto ao carrinho', () => {
    productsPage.addProductToCart('Sauce Labs Backpack');
    cy.get('.shopping_cart_badge', { timeout: 10000 }).should('contain.text', '1');
  });

  it('deve remover um produto do carrinho', () => {
    productsPage.addProductToCart('Sauce Labs Backpack');
    productsPage.removeProductFromCart('Sauce Labs Backpack');
    productsPage.verifyCartIsEmpty();
  });

  it('deve verificar se o produto foi adicionado ao carrinho', () => {
    productsPage.addProductToCart('Sauce Labs Backpack');
    productsPage.openCart();
    cartPage.verifyProductInCart('Sauce Labs Backpack');
  });

  it('deve verificar detalhes do produto', () => {
    productsPage.getProductList().first().should('be.visible');
  });
});
