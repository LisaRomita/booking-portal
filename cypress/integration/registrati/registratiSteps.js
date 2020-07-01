Given('I navigate to the Login section', () => {
    cy.visit('http://localhost:4200/login')
    });
When('I click on the signup button', () => {
    cy.get("#reg").click()
})
When('I enter {string} in name field', (query) => {
    cy.get('#nome').type(query)
    cy.wait(500)
    });
When('I enter {string} in surname field', (query) => {
    cy.get('#cognome').type(query)
    cy.wait(500)
});
When('I enter {string} in user field', (query) => {
    cy.get('#user').type(query)
    cy.wait(500)
});
When('I enter {string} in email field', (query) => {
    cy.get('#email').type(query)
    cy.wait(500)
});
When('I enter {string} in password field', (query) => {
    cy.get('#password').type(query)
    cy.wait(500)
});
When('I enter {string} in conferma password field', (query) => {
    cy.get('#conferma').type(query)
    cy.wait(500)
});
When('I click on the registrati button', () => {
    cy.get('#button3').click()
    });
Then('page should contain {string}', (expected) => {
    cy.get("h1").should('contain', expected)
    });