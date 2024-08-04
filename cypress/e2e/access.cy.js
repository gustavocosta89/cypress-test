import AccessPage from '../pages/AccessPage';

describe('Protected Pages Access Test', () => {
  const accessPage = new AccessPage();

  it('should display login form when accessing protected pages without authentication', () => {
    accessPage.visitPageWithoutAuth('/inventory.html'); // Tenta acessar a página de inventário sem autenticação

    // Verifica se a página está exibindo o formulário de login
    accessPage.checkLoginPage();
  });
});
