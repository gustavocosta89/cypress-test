// cypress/pages/CheckoutPage.js
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

  // Clica no botão de finalizar
  finishCheckout() {
    cy.get('button[data-test="finish"]').click();
  }

  // Clica no botão de cancelar
  cancelCheckout() {
    cy.get('button[data-test="cancel"]').click();
  }
}

export default CheckoutPage;
