class AccessPage {
  // Tenta acessar uma página protegida
  visitPageWithoutAuth(pageUrl) {
    // Visita a página sem autenticação e não falha se o status não for 200
    cy.visit(pageUrl, { failOnStatusCode: false });
  }

  // Verifica se a página exibe o formulário de login
  checkLoginPage() {
    // Verifica se o logotipo de login está visível
    cy.get('.login_logo').should('be.visible');
    
    // Verifica se o campo de nome de usuário está visível
    cy.get('#user-name').should('be.visible');
    
    // Verifica se o campo de senha está visível
    cy.get('#password').should('be.visible');
    
    // Verifica se o botão de login está visível
    cy.get('.btn_action').should('be.visible');
  }
}

export default AccessPage;
