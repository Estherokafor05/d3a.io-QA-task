
// selectors
Cypress.selectors = require('../support/selectors.js')

cy.faker = require('faker')

import 'cypress-wait-until'

// commands
import '../support/helper-functions/helper-functions'
import '../support/testCommands/loginCommand'
import '../support/testCommands/navigationCommand'
import '../support/testCommands/projectsCommand'
import '../support/testCommands/homeCommand'
import '../support/testCommands/simulatorCommand'

