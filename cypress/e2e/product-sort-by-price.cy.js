import ProductsPage from '../pages/ProductsPage';

describe('Teste de Ordenação de Produtos por Preço', () => {
  const productsPage = new ProductsPage();

  beforeEach(() => {
    cy.visit('/'); // Visita a página inicial

    // Realiza o login
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html'); // Verifica a URL
  });

  it('deve ordenar os produtos por preço do menor para o maior', () => {
    // Seleciona a opção de ordenação por preço
    productsPage.sortByPriceLowToHigh();

    // Verifica se os produtos estão ordenados por preço de forma crescente
    productsPage.verifyProductsSortedByPriceLowToHigh();
  });
});
