import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';

describe('Products Page Tests', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    loginPage.visit(); // Navega para a página de login
    loginPage.fillUsername('standard_user'); // Preenche o nome de usuário
    loginPage.fillPassword('secret_sauce'); // Preenche a senha
    loginPage.submitLogin(); // Submete o login
    cy.url().should('include', '/inventory.html'); // Verifica se a URL contém '/inventory.html'
    productsPage.verifyPageTitle(); // Verifica o título da página após o login
  });

  it('should display a list of products', () => {
    productsPage.verifyAllProductsVisible(); // Verifica se todos os produtos estão visíveis
  });

  it('should add a product to the cart', () => {
    productsPage.addProductToCart('Sauce Labs Backpack'); // Adiciona o produto ao carrinho
    cy.get('.shopping_cart_badge', { timeout: 10000 })
      .should('contain.text', '1'); // Verifica se o ícone do carrinho mostra 1 item
  });

  it('should remove a product from the cart', () => {
    productsPage.addProductToCart('Sauce Labs Backpack'); // Adiciona o produto ao carrinho
    productsPage.removeProductFromCart('Sauce Labs Backpack'); // Remove o produto do carrinho
    productsPage.verifyCartIsEmpty(); // Verifica se o carrinho está vazio
  });

  it('should verify the product is added to the cart', () => {
    productsPage.addProductToCart('Sauce Labs Backpack'); // Adiciona o produto ao carrinho
    productsPage.openCart(); // Abre o carrinho
    cartPage.verifyProductInCart('Sauce Labs Backpack'); // Verifica se o produto está no carrinho
  });

  it('should check product details', () => {
    productsPage.getProductList()
      .first()
      .should('be.visible'); // Verifica se o primeiro produto está visível
  });
});
