Cypress.Commands.add('simulationUrl', () => {
    cy.get(Cypress.selectors.addSimulation).click()
    cy.wait(6000)
})
Cypress.Commands.add('simulation', () => {
    cy.get(Cypress.selectors.simulationButton)
        .contains('new simulation')
        .first()
        .click( { multiple: true })
        cy.wait(6000)
})

Cypress.Commands.add('clickNext', () => {
    cy.get(Cypress.selectors.nextButton).click()
})