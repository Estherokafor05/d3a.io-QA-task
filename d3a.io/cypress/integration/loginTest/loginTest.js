import{Given,And,When,Then} from "cypress-cucumber-preprocessor/steps";


Given(/^User visits the da3.io website$/, function () {
    cy.visitD3a()
});
And(/^User Inputs Email$/, function () {
    cy.inputEmail('estherokafor05@gmail.com')
});
And(/^Password$/, function () {
    cy.inputPassword('Bible@1234')
});
When(/^User clicks on login Button$/, function () {
    cy.clickLoginButton()
});
Then(/^User Should be routed to homeScreen$/, function () {
    cy.validateLogin()
});
