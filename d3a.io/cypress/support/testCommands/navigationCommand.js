Cypress.Commands.add('visitD3a', () => {
    cy.visit('https://www.d3a.io/')
    cy.get(Cypress.selectors.login).click()
})

Cypress.Commands.add('assertUrl', () => {
    cy.url().should('include','/projects')
})

Cypress.Commands.add('config', () => {
    cy.url().should('include','/configuration')
})
