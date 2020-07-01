Given('I navigate to the dashboard', () => {
    cy.visit('http://localhost:4200/')
    });
When('I click on stanza singola card', () =>{
    cy.get("#singola").click()
})
When('I click on prenota button', () =>{
    cy.get("#button5").click()
})
When('I enter {string} in nome field', (query) => {
    cy.get('#nome').type(query)
    });
When('I enter {string} in cognome field', (query) => {
    cy.get('#cognome').type(query)
});
When('I enter {string} in email field', (query) => {
    cy.get('#mail').type(query)
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
When('I select {string} as payment method', (query) => {
    cy.get('#pagamento').select(query)
});
When('I click prenota button', () => {
    cy.get('#button6').click()
    });
Then('div should contain {string}', (expected) => {
    cy.get("h1").should('contain', expected)
    });