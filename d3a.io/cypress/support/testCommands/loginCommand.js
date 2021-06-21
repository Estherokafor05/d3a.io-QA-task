Cypress.Commands.add('inputEmail', (email) => {
    cy.get(Cypress.selectors.UserName).type(email)
})

Cypress.Commands.add('inputPassword', (password) => {
    cy.get(Cypress.selectors.PassWord).type(password)
})

Cypress.Commands.add('clickLoginButton', () => {
    cy.get(Cypress.selectors.loginButton).click({waitForAnimations: 2000})
})