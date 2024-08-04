// cypress/pages/CartPage.js
class CartPage {
  // Adiciona um produto ao carrinho
  addProductToCart(productName) {
    // Localiza e clica no botão "Add to Cart"
    cy.contains(productName).parent().find('button[data-test="add-to-cart"]').click();
  }

  // Abre a página do carrinho
  openCart() {
    // Clica no link para abrir a página do carrinho
    cy.get('[data-test="shopping-cart-link"]').click();
  }

  // Verifica se o produto está no carrinho
  verifyProductInCart(productName) {
    // Verifica se o produto está presente no carrinho
    cy.contains(productName).should('exist');
  }

  // Finaliza a compra (Clica no botão "Checkout")
  proceedToCheckout() {
    // Clica no botão "Checkout"
    cy.get('[data-test="checkout"]').click();
  }
}

export default CartPage;
