// cypress/pages/CartPage.js
class CartPage {
  // Adiciona um produto ao carrinho
  addProductToCart(productName) {
    // Esse método geralmente seria usado na página de produtos. Verifique se ele está sendo usado corretamente.
    cy.contains(productName).parent().find('button[data-test="add-to-cart"]').click(); // Localiza e clica no botão "Add to Cart"
  }

  // Abre a página do carrinho
  openCart() {
    cy.get('[data-test="shopping-cart-link"]').click(); // Clica no link para abrir a página do carrinho
  }

  // Verifica se o produto está no carrinho
  verifyProductInCart(productName) {
    cy.contains(productName).should('exist'); // Verifica se o produto está presente no carrinho
  }

  // Finaliza a compra (Clica no botão "Checkout")
  proceedToCheckout() {
    cy.get('[data-test="checkout"]').click(); // Clica no botão "Checkout"
  }
}

export default CartPage;
