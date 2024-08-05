// cypress/e2e/checkout-error-messages.cy.js

import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Teste de Mensagens de Erro no Checkout', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    // Navegar para a página de login e realizar o login
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submitLogin();
    
    // Verificar se o login foi bem-sucedido e que a URL está correta
    cy.url().should('include', '/inventory.html');

    // Adicionar um produto ao carrinho e navegar para a página de checkout
    productsPage.addProductToCart('Sauce Labs Backpack');
    productsPage.openCart();
    cartPage.proceedToCheckout();
  });

  it('deve exibir mensagens de erro para entradas inválidas no formulário de checkout', () => {
    // Preencher o formulário de checkout com informações inválidas
    checkoutPage.fillFirstName('John'); // Preenche apenas o primeiro nome
    checkoutPage.continueCheckout();
    
    // Verificar se a mensagem de erro é exibida
    cy.get('[data-test="error"]').should('contain', 'Error: Last Name is required');
  });
});
