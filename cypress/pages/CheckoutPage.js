// cypress/pages/CheckoutPage.js

class CheckoutPage {
  // Preenche o campo de nome
  fillFirstName(firstName) {
    // Seleciona o campo de entrada de nome e insere o valor fornecido
    cy.get('input[data-test="firstName"]').type(firstName);
  }

  // Preenche o campo de sobrenome
  fillLastName(lastName) {
    // Seleciona o campo de entrada de sobrenome e insere o valor fornecido
    cy.get('input[data-test="lastName"]').type(lastName);
  }

  // Preenche o campo de código postal
  fillPostalCode(postalCode) {
    // Seleciona o campo de entrada de código postal e insere o valor fornecido
    cy.get('input[data-test="postalCode"]').type(postalCode);
  }

  // Clica no botão de continuar
  continueCheckout() {
    // Seleciona o botão de continuar e clica nele
    cy.get('input[data-test="continue"]').click();
  }
}

export default CheckoutPage;
