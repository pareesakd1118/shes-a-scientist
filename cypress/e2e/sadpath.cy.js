describe('Error Component', () => {
  it('displays a useful error message to user if server is down', () => {
    cy.intercept('GET', 'https://gentle-sierra-88471-456c461e0158.herokuapp.com/api/v1/womenscientists', {
      statusCode: 500,
      body: {},
    }).as('serverError');

    cy.visit('https://shes-a-scientist.vercel.app/');

    cy.wait('@serverError').then(() => {
      cy.get('#error').should('exist');
      cy.get("h1").contains("Uh oh...");
      cy.get("#err-message").contains("500 Error: Internal Server Error. Unable to retrieve scientists at this time.");
    });
  });

  it('displays a useful error message to user if server returns bad request', () => {
    cy.intercept('GET', 'https://gentle-sierra-88471-456c461e0158.herokuapp.com/api/v1/womenscientists', {
      statusCode: 400,
      body: {},
    }).as('badRequest');

    cy.visit('https://shes-a-scientist.vercel.app/');

    cy.wait('@badRequest').then(() => {
      cy.get('#error').should('exist');
      cy.get("h1").contains("Uh oh...");
      cy.get("#err-message").contains("400 Error: Bad Request. Unable to retrieve scientists at this time.");
    });
  });
});
