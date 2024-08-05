// cypress/e2e/logout.cy.js
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Teste de Logout', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  beforeEach(() => {
    loginPage.visit(); // Visita a página de login
    loginPage.fillUsername('standard_user'); // Preenche o nome de usuário
    loginPage.fillPassword('secret_sauce'); // Preenche a senha
    loginPage.submitLogin(); // Submete o login
  });

  it('deve realizar o logout com sucesso', () => {
    cy.get('#react-burger-menu-btn').click(); // Abre o menu do usuário
    cy.get('#logout_sidebar_link').click(); // Clica em logout
    cy.url().should('include', '/'); // Verifica se redirecionou para a página de login
  });
});
