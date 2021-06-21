
Cypress.Commands.add('validateLogin', () => {
    cy.get('.header > .headline').contains('Home')
})