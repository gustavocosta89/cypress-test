// cypress/e2e/checkout.cy.js
import CheckoutPage from '../pages/CheckoutPage';
import CartPage from '../pages/CartPage';

describe('Testes de Checkout', () => {
  const checkoutPage = new CheckoutPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    cy.visit('/'); // Visita a página inicial

    // Realiza o login
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Adiciona um item ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Abre a página do carrinho
    cartPage.openCart();

    // Clica no botão de checkout
    cartPage.proceedToCheckout();
  });

  // Testa a conclusão do processo de checkout
  it('deve completar o processo de checkout', () => {
    checkoutPage.fillFirstName('John'); // Preenche o primeiro nome
    checkoutPage.fillLastName('Doe'); // Preenche o sobrenome
    checkoutPage.fillPostalCode('12345'); // Preenche o código postal
    checkoutPage.continueCheckout(); // Clica no botão de continuar
    cy.url().should('include', '/checkout-step-two.html'); // Verifica a URL após a continuação

    // Verifica a presença dos botões e a continuidade do fluxo
    checkoutPage.finishCheckout(); // Clica no botão "Finish"
    cy.url().should('include', '/checkout-complete.html'); // Verifica a URL após finalizar o checkout
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!'); // Verifica a mensagem de conclusão
  });

  // Testa o erro quando o formulário de checkout está incompleto
  it('deve exibir erro quando o formulário de checkout está incompleto', () => {
    checkoutPage.continueCheckout(); // Tenta continuar sem preencher o formulário
    cy.url().should('include', '/checkout-step-one.html'); // Verifica se voltou para a página de checkout com erro
    cy.get('h3[data-test="error"]').should('be.visible'); // Verifica a exibição da mensagem de erro
    cy.get('h3[data-test="error"]').should('contain.text', 'Error: First Name is required'); // Verifica o texto da mensagem de erro
  });
});
