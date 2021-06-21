import {Given,And,When,Then} from "cypress-cucumber-preprocessor/steps";

const ProjectName= cy.faker.lorem.word()
const ProjectDescription= cy.faker.lorem.word()

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

Given(/^User visits ProjectUrl$/, function () {
    cy.createProject()

});

And(/^User clicks on newProject$/, function () {
    cy.clickProject()
});
And(/^User Inputs Name$/, function () {
    cy.enterProjectName(ProjectName)
});
And(/^Description$/, function () {
    cy.enterProjectDescription(ProjectDescription)

});
When(/^User clicks on ADD$/, function () {
    cy.clickAddButton()
});
Then(/^User should view new project$/, function () {
    cy.assertUrl()
});
Given(/^user Clicks on Icon$/, function () {
    cy.verifyCreatedProject(ProjectName)
    cy.simulationUrl()

});
When(/^User clicks on new Simulation$/, function () {
    cy.simulation()

});
And(/^User Clicks on Next$/, function () {
    cy.clickNext()

});
Then(/^User is redirected to the simulation Dashboard$/, function () {
    cy.config()

});
