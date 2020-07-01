Feature: Logout

@Logout
Scenario: Effettuare il logout
Given I am logged in
When I click the logout button
Then the url should be "http://localhost:4200/logout"