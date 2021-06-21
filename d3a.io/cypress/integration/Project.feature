Feature: Create Project

  As a User
  I should be able to create a new project and validate Project

  Background:I want to be able to login as a user
    Given User visits the da3.io website
    And  User Inputs Email
    And  Password
    When User clicks on login Button
    Then User Should be routed to homeScreen

  Scenario: I want to be able to create new project
    Given User visits ProjectUrl
    And User clicks on newProject
    And   User Inputs Name
    And   Description
    When  User clicks on ADD
    Then  User should view new project

