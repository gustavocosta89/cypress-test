class ProductsPage {
    verifyProductsPage() {
      cy.url().should('include', '/inventory.html'); // Verifica se a URL contém '/inventory.html'
      cy.get('.inventory_item').should('have.length.greaterThan', 0); // Verifica se há itens de inventário na página
    }
  }
  
  export default ProductsPage;
  