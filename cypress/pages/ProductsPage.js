// cypress/pages/ProductsPage.js

class ProductsPage {
  // Abre o carrinho de compras
  openCart() {
    cy.get('.shopping_cart_link').click(); // Clica no link do carrinho
  }

  // Adiciona um produto ao carrinho
  addProductToCart(productName) {
    // Formata o nome do produto para corresponder ao atributo data-test
    const formattedProductName = productName.toLowerCase().replace(/\s+/g, '-');
    
    // Encontra o botão de adicionar ao carrinho usando o atributo data-test
    cy.get(`[data-test="add-to-cart-${formattedProductName}"]`)
      .should('be.visible') // Verifica se o botão está visível
      .click(); // Clica no botão para adicionar o produto ao carrinho
  }

  // Remove um produto do carrinho
  removeProductFromCart(productName) {
    // Formata o nome do produto para corresponder ao atributo data-test
    const formattedProductName = productName.toLowerCase().replace(/\s+/g, '-');
    
    // Encontra o botão de remoção usando o atributo data-test
    cy.get(`[data-test="remove-${formattedProductName}"]`)
      .should('be.visible') // Verifica se o botão está visível
      .click(); // Clica no botão para remover o produto do carrinho
  }

  // Verifica se um produto está no carrinho
  verifyProductInCart(productName) {
    cy.get('.cart_item') // Seleciona o item do carrinho
      .should('contain', productName); // Verifica se o produto está presente
  }

  // Verifica se o carrinho está vazio
  verifyCartIsEmpty() {
    cy.get('.cart_list') // Seleciona a lista de itens no carrinho
      .should('be.empty'); // Verifica se a lista está vazia
  }

  // Verifica o título da página de produtos
  verifyPageTitle() {
    cy.get('.title') // Seleciona o elemento do título da página
      .should('have.text', 'Products'); // Verifica se o texto é 'Products'
  }

  // Verifica se todos os produtos estão visíveis na página
  verifyAllProductsVisible() {
    cy.get('.inventory_item') // Seleciona todos os itens de inventário
      .should('be.visible'); // Verifica se todos os itens estão visíveis
  }

  // Obtém a lista de produtos na página
  getProductList() {
    return cy.get('.inventory_item'); // Seleciona todos os itens de inventário
  }

  // Verifica se os produtos estão ordenados por preço de baixo para cima
  verifyProductsSortedByPriceLowToHigh() {
    cy.get('.inventory_item')
      .then((items) => {
        const prices = [...items].map(item => {
          return parseFloat(item.querySelector('.inventory_item_price').textContent.replace('$', ''));
        });
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sortedPrices);
      });
  }
}

export default ProductsPage;
