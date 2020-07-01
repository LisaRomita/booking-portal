Feature: Prenotare una stanza

@dashboard
Scenario: Prenotazione stanza singola
Given I navigate to the dashboard
When I click on stanza singola card
And I click on prenota button
And I enter "nome" in nome field
And I enter "cognome" in cognome field
And I enter "fake@email.com" in email field
And I enter "2020-06-22" in arrivo field
And I enter "2020-06-24" in partenza field
And I select "2 adulti" in adulti field
And I select "1 bambino" in bambini field
And I select "1 stanza" in stanze field
And I select "Paypal" as payment method
And I click prenota button
Then div should contain "Grazie"