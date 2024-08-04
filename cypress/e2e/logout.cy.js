import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Logout Test', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submitLogin(); // Correção aqui para chamar o método correto
  });

  it('should logout successfully', () => {
    cy.get('#react-burger-menu-btn').click(); // Abre o menu do usuário
    cy.get('#logout_sidebar_link').click(); // Clica em logout
    cy.url().should('include', '/'); // Verifica se redirecionou para a página de login
  });
});
