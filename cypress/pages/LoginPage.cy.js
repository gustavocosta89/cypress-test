class LoginPage {
  visit() {
    cy.visit('/'); // Usa o baseUrl definido no cypress.config.js
  }

  fillUsername(username) {
    cy.get('input[data-test="username"]').type(username); // Preenche o campo de nome de usuário usando o seletor de data-test
  }

  fillPassword(password) {
    cy.get('input[data-test="password"]').type(password); // Preenche o campo de senha usando o seletor de data-test
  }

  submitLogin() {
    cy.get('input[data-test="login-button"]').click(); // Clica no botão de login usando o seletor de data-test
  }
}

export default LoginPage;
