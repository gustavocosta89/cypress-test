class CartPage {
  // Adiciona um produto ao carrinho
  addProductToCart(productName) {
    cy.contains(productName).parent().find('button[data-test^="add-to-cart"]').click();
  }

  // Abre a página do carrinho
  openCart() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }

  // Verifica se o produto está no carrinho
  verifyProductInCart(productName) {
    cy.contains('.cart_item', productName).should('exist');
  }

  // Finaliza a compra (clica no botão "Checkout")
  proceedToCheckout() {
    cy.get('[data-test="checkout"]').click();
  }
}

export default CartPage;
