import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Teste de Tempo de Carregamento da Página', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  it('deve carregar a página de produtos dentro de um tempo razoável', () => {
    loginPage.visit(); // Visita a página de login
    loginPage.fillUsername('standard_user'); // Preenche o nome de usuário
    loginPage.fillPassword('secret_sauce'); // Preenche a senha
    loginPage.submitLogin(); // Submete o login

    // Verifica se a lista de produtos está visível dentro do timeout padrão
    cy.get('.inventory_list', { timeout: 10000 }).should('be.visible'); // Aumenta o timeout para até 10 segundos
  });
});
