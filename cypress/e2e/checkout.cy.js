import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout Tests', () => {
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    cy.visit('/'); // Visita a página inicial

    // Realiza o login
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Adiciona um item ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Abre a página do carrinho
    cy.get('a.shopping_cart_link').click();

    // Clica no botão de checkout
    cy.get('button[data-test="checkout"]').click();
  });

  // Testa a conclusão do processo de checkout
  it('should complete the checkout process', () => {
    checkoutPage.fillFirstName('John'); // Preenche o primeiro nome
    checkoutPage.fillLastName('Doe'); // Preenche o sobrenome
    checkoutPage.fillPostalCode('12345'); // Preenche o código postal
    checkoutPage.continueCheckout(); // Clica no botão de continuar
    cy.url().should('include', '/checkout-step-two.html'); // Verifica a URL após a continuação

    // Verifica a presença dos botões e a continuidade do fluxo
    cy.get('button[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete.html'); // Verifica a URL após finalizar o checkout
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
