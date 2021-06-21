
Cypress.Commands.add('createProject', () => {
    cy.get(Cypress.selectors.NewProject).click()
})
Cypress.Commands.add('clickProject', () => {
    cy.get(Cypress.selectors.project1).click()
})

Cypress.Commands.add('enterProjectName', (name) => {
    cy.get(Cypress.selectors.ProjectName).type(name)
})

Cypress.Commands.add('enterProjectDescription', (name) => {
    cy.get(Cypress.selectors.description).type(name)
})

Cypress.Commands.add('clickAddButton', () => {
    cy.get(Cypress.selectors.add).click( {waitForAnimations : 2000})
})

Cypress.Commands.add('reloadProjects', () => {
    cy.reload()
})

Cypress.Commands.add('verifyCreatedProject', projectName  => {
    const project = projectName
    if (!Cypress.$(`h2:contains("${project}")`).length) {
        return cy.reloadProjects().then(() => false)
    } else {
        return true
    }

})