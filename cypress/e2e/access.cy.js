// cypress/e2e/access.cy.js
import AccessPage from '../pages/AccessPage';

describe('Teste de Acesso a Páginas Protegidas', () => {
  const accessPage = new AccessPage();

  it('deve exibir o formulário de login ao acessar páginas protegidas sem autenticação', () => {
    accessPage.visitPageWithoutAuth('/inventory.html'); // Tenta acessar a página de inventário sem autenticação

    // Verifica se a página está exibindo o formulário de login
    accessPage.checkLoginPage();
  });
});
