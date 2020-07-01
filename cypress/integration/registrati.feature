Feature: Signup

@registrati
Scenario: Registrazione nuovo account

Given I navigate to the Login section
When I click on the signup button
And I enter "nome" in name field
And I enter "cognome" in surname field
And I enter "user" in user field
And I enter "fake@email.com" in email field
And I enter "password" in password field
And I enter "password" in conferma password field
And I click on the registrati button
Then page should contain "Registrazione riuscita"