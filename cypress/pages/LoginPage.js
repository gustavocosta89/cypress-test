// cypress/pages/LoginPage.js
class LoginPage {
  // Visita a página de login
  visit() {
    cy.visit('/'); // URL da página de login
  }

  // Preenche o campo de nome de usuário
  fillUsername(username) {
    cy.get('input[data-test="username"]').type(username);
  }

  // Preenche o campo de senha
  fillPassword(password) {
    cy.get('input[data-test="password"]').type(password);
  }

  // Clica no botão de login
  submitLogin() {
    cy.get('input[data-test="login-button"]').click();
  }
}

export default LoginPage;
