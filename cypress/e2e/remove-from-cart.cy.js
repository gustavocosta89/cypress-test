import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Testes de Remoção do Carrinho', () => {
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

  it('deve remover um produto do carrinho', () => {
    productsPage.addProductToCart('Sauce Labs Backpack'); // Adiciona o produto ao carrinho
    productsPage.removeProductFromCart('Sauce Labs Backpack'); // Remove o produto do carrinho
    cy.get('.shopping_cart_badge').should('not.exist'); // Verifica se o produto foi removido do carrinho
  });
});
