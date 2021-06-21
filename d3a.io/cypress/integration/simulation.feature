Feature: Create Simulation

  As a user i should be able to create a new simulation

  Background:I want to be able to login as a user
    Given User visits the da3.io website
    And  User Inputs Email
    And  Password
    When User clicks on login Button
    Then User Should be routed to homeScreen


  Scenario: I want to create new simulation
    Given User visits ProjectUrl
    And User clicks on newProject
    And   User Inputs Name
    And   Description
    When  User clicks on ADD
    Then  User should view new project
    When user Clicks on Icon
    And User clicks on new Simulation
    And User Clicks on Next
    Then User is redirected to the simulation Dashboard