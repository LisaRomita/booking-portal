Feature: Chiedere un preventivo

@dashboard
Scenario: controllare un preventivo
Given I navigate to the dashboard
When I enter "2020-06-22" in arrivo field
And I enter "2020-06-24" in partenza field
And I select "2 adulti" in adulti field
And I select "1 bambino" in bambini field
And I select "1 stanza" in stanze field
And I click search button
Then div should contain "A partire da"