import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Page Load Time Test', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  it('should load the products page within a reasonable time', () => {
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submitLogin();

    // Verifica se a lista de produtos está visível dentro do timeout padrão
    cy.get('.inventory_list', { timeout: 10000 }).should('be.visible'); // Aumenta o timeout para até 10 segundos
  });
});
