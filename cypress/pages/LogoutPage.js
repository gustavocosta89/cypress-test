class LogoutPage {
  // Abre o menu de navegação
  openMenu() {
    cy.get('#react-burger-menu-btn') // Seleciona o botão do menu
      .should('be.visible') // Garante que o botão está visível
      .click(); // Clica no botão do menu
  }

  // Faz logout do sistema
  logout() {
    cy.get('#logout_sidebar_link') // Seleciona o link de logout
      .should('be.visible') // Garante que o link está visível
      .click(); // Clica no link de logout
  }
}

export default LogoutPage;
