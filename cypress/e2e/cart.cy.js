// cypress/e2e/cart.cy.js
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Testes do Carrinho', () => {
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

  it('deve adicionar um produto ao carrinho', () => {
    productsPage.addProductToCart('Sauce Labs Backpack'); // Adiciona o produto ao carrinho
    productsPage.openCart(); // Abre o carrinho

    // Verifica se o produto foi adicionado ao carrinho
    cy.get('.cart_item').should('contain', 'Sauce Labs Backpack'); // Verifica se o produto está no carrinho
  });
});
