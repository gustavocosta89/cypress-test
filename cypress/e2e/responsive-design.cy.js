import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Teste de Design Responsivo', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  beforeEach(() => {
    loginPage.visit(); // Navega para a página de login
    loginPage.fillUsername('standard_user'); // Preenche o nome de usuário
    loginPage.fillPassword('secret_sauce'); // Preenche a senha
    loginPage.submitLogin(); // Submete o login
    // Verifica se a navegação para a página de produtos ocorreu
    cy.url().should('include', '/inventory.html');
  });

  it('deve exibir a página de produtos corretamente em diferentes tamanhos de tela', () => {
    const viewports = ['iphone-6', 'ipad-2', [1280, 720]]; // Array com presets e dimensões

    viewports.forEach((viewport) => {
      if (Array.isArray(viewport)) {
        cy.viewport(viewport[0], viewport[1]); // Passa largura e altura como números
      } else {
        cy.viewport(viewport); // Passa preset como string
      }
      cy.get('.inventory_list').should('be.visible'); // Verifica se a lista de produtos está visível
    });
  });
});
