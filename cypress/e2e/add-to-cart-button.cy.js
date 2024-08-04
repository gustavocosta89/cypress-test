import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Add to Cart Button Tests', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  beforeEach(() => {
    loginPage.visit(); // Navega para a página de login
    loginPage.fillUsername('standard_user'); // Preenche o nome de usuário
    loginPage.fillPassword('secret_sauce'); // Preenche a senha
    loginPage.submitLogin(); // Submete o login

    // Verifica se a navegação para a página de produtos ocorreu
    cy.url().should('include', '/inventory.html');
  });

  it('should add a product to the cart', () => {
    // Adiciona o produto ao carrinho
    productsPage.addProductToCart('Sauce Labs Backpack');

    // Abre o carrinho para verificar se o produto foi adicionado
    productsPage.openCart();

    // Aumenta o timeout para garantir que o carrinho tenha tempo de atualizar
    cy.get('.cart_item', { timeout: 15000 }) // Aguarda até 15 segundos para encontrar o item no carrinho
      .should('contain', 'Sauce Labs Backpack'); // Verifica se o produto está no carrinho
  });
});
