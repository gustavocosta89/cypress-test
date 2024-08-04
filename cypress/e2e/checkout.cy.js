// cypress/e2e/checkout.cy.js
import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout Tests', () => {
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    cy.visit('/inventory.html'); // Visita a página de inventário
    cy.get('a[href="/cart.html"]').click(); // Abre a página do carrinho
    cy.get('button[data-test="checkout"]').click(); // Clica no botão de checkout
  });

  // Testa a conclusão do processo de checkout
  it('should complete the checkout process', () => {
    checkoutPage.fillFirstName('John'); // Preenche o primeiro nome
    checkoutPage.fillLastName('Doe'); // Preenche o sobrenome
    checkoutPage.fillPostalCode('12345'); // Preenche o código postal
    checkoutPage.continueCheckout(); // Clica no botão de continuar
    cy.url().should('include', '/checkout-step-two.html'); // Verifica a URL após a continuação
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!'); // Verifica a mensagem de conclusão
  });

  // Testa o erro quando o formulário de checkout está incompleto
  it('should display error when checkout form is incomplete', () => {
    checkoutPage.continueCheckout(); // Tenta continuar sem preencher o formulário
    cy.url().should('include', '/checkout-step-one.html'); // Verifica se voltou para a página de checkout com erro
    cy.get('h3[data-test="error"]').should('be.visible'); // Verifica a exibição da mensagem de erro
    cy.get('h3[data-test="error"]').should('contain.text', 'Error: First Name is required'); // Verifica o texto da mensagem de erro
  });
});
