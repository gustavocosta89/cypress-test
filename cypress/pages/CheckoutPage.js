class CheckoutPage {
  // Preenche o campo de nome
  fillFirstName(firstName) {
    cy.get('input[data-test="firstName"]').type(firstName);
  }

  // Preenche o campo de sobrenome
  fillLastName(lastName) {
    cy.get('input[data-test="lastName"]').type(lastName);
  }

  // Preenche o campo de código postal
  fillPostalCode(postalCode) {
    cy.get('input[data-test="postalCode"]').type(postalCode);
  }

  // Clica no botão de continuar
  continueCheckout() {
    cy.get('input[data-test="continue"]').click();
  }
}

export default CheckoutPage;
