// cypress/e2e/login.cy.js
import LoginPage from '../pages/LoginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  // Testa o login com credenciais válidas
  it('should login with valid credentials', () => {
    loginPage.visit(); // Visita a página de login
    loginPage.fillUsername('standard_user'); // Preenche o nome de usuário
    loginPage.fillPassword('secret_sauce'); // Preenche a senha
    loginPage.submitLogin(); // Submete o login
    cy.url().should('include', '/inventory.html'); // Verifica se a URL contém '/inventory.html'
  });

  // Testa o login com credenciais inválidas
  it('should fail to login with invalid credentials', () => {
    loginPage.visit(); // Visita a página de login
    loginPage.fillUsername('invalid_user'); // Preenche um nome de usuário inválido
    loginPage.fillPassword('invalid_password'); // Preenche uma senha inválida
    loginPage.submitLogin(); // Submete o login
    cy.get('h3[data-test="error"]').should('be.visible'); // Verifica se a mensagem de erro está visível
    cy.get('h3[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service'); // Verifica o texto da mensagem de erro
  });
});
