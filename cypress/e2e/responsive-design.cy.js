import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Responsive Design Test', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submitLogin();
    // Verifique se a navegação para a página de produtos ocorreu
    cy.url().should('include', '/inventory.html');
  });

  it('should display products page correctly on different screen sizes', () => {
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
