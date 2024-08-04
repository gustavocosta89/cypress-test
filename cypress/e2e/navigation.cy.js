// cypress/e2e/navigation.cy.js
import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Navigation Test', () => {
  const loginPage = new LoginPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    loginPage.visit(); // Visita a página de login
    loginPage.fillUsername('standard_user'); // Preenche o nome de usuário
    loginPage.fillPassword('secret_sauce'); // Preenche a senha
    loginPage.submitLogin(); // Submete o login
    
    // Adiciona um produto ao carrinho
    cartPage.addProductToCart('Sauce Labs Backpack');
    cartPage.openCart(); // Abre o carrinho

    // Intercepta a requisição para a página do carrinho e garante que ela seja concluída
    cy.intercept('GET', '/cart.html').as('cartPage');
    cy.wait('@cartPage');
  });

  it('should navigate to the checkout page from the cart page', () => {
    // Adiciona uma interceptação para a requisição da página de checkout
    cy.intercept('GET', '/checkout-step-one.html').as('checkoutPage');
    cartPage.openCheckout(); // Abre a página de checkout
    cy.wait('@checkoutPage'); // Aguarda o carregamento da página de checkout
    cy.url().should('include', '/checkout-step-one.html'); // Verifica a URL da página de checkout
  });
});
