// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('FirstPage Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/scientists', { fixture: 'scientists.json' }).as('getAllRoommates');
    cy.visit('http://localhost:3001/'); 
  });

  it('displays a random scientist and her images/description and science-related images', () => {
    cy.get('.top-bar').should('be.visible');
    cy.get('.mission-link').should('be.visible');
    cy.get('.fp-name-div').should('be.visible');
    cy.get('.profile-image').should('be.visible');
    cy.get('.fp-name').should('be.visible');
    cy.get('.fp-dob').should('be.visible');
    cy.get('.background-image').should('be.visible');
    cy.get('.fp-accomp').should('be.visible');
    cy.get('.frontpage-image-div').children().should('have.length', 5);
    cy.get('.frontpage-image-div').first().contains('NGC 3132');
    cy.get('.frontpage-image-div').first().contains('Green Flourescent Protein (GFP');
  });
});