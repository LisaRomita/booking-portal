Feature: Usare il form contact-us

@contattaci
Scenario: Inviare un messaggio
Given I navigate to the Contact Us section
When I enter "fake@email.com" in email field
And I enter "Hello" in text field
And I click submit button
Then div should contain "Grazie, risponderemo il prima possibile"