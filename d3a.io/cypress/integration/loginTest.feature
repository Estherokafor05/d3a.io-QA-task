Feature:Authentication
  As a user
I should be able to login with a valid user credentials.

Background:


  Scenario: I want to be able to login as a user
    Given User visits the da3.io website
    And  User Inputs Email
    And  Password
    When User clicks on login Button
    Then User Should be routed to homeScreen
