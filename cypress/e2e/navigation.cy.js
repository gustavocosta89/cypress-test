import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Teste de Navegação', () => {
  const loginPage = new LoginPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    loginPage.visit(); // Visita a página de login
    loginPage.fillUsername('standard_user'); // Preenche o nome de usuário
    loginPage.fillPassword('secret_sauce'); // Preenche a senha
    loginPage.submitLogin(); // Submete o login

    // Adiciona um produto ao carrinho e abre o carrinho
    cartPage.addProductToCart('Sauce Labs Backpack');
    cartPage.openCart();

    // Intercepta a requisição para a página do carrinho e garante que ela seja concluída
    cy.intercept('GET', '/cart.html').as('cartPage');
    cy.wait('@cartPage');
  });

  it('deve navegar para a página de checkout a partir da página do carrinho', () => {
    // Intercepta a requisição para a página de checkout
    cy.intercept('GET', '/checkout-step-one.html').as('checkoutPage');
    cartPage.proceedToCheckout(); // Abre a página de checkout
    cy.wait('@checkoutPage'); // Aguarda o carregamento da página de checkout
    cy.url().should('include', '/checkout-step-one.html'); // Verifica a URL da página de checkout
  });
});
