Feature: Login

@login
Scenario: Effettuare il login
Given I navigate to the Login section
When I enter "mrossi" in username field
And I enter "mrossi" in password field
And I click login button
Then page title should contain "mrossi"