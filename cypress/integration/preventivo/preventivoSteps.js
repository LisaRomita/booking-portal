Given('I navigate to the dashboard', () => {
    cy.visit('http://localhost:4200/')
    });
When('I enter {string} in arrivo field', (query) => {
    cy.get('#arrivo').type(query)
    });
When('I enter {string} in partenza field', (query) => {
    cy.get('#partenza').type(query)
        });
When('I select {string} in adulti field', (query) => {
    cy.get('#adulti').select(query)
            });
When('I select {string} in bambini field', (query) => {
    cy.get('#bambini').select(query)
                });
When('I select {string} in stanze field', (query) => {
    cy.get('#stanze').select(query)
                    });
When('I click search button', () => {
    cy.get('#button4').click()
    });
Then('div should contain {string}', (expected) => {
    cy.get("#tot").should('contain', expected)
    });