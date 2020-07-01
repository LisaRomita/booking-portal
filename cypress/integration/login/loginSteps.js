Given('I navigate to the Login section', () => {
    cy.visit('http://localhost:4200/login')
    });
When('I enter {string} in username field', (query) => {
    cy.get('#email').type(query)
    cy.wait(500)
    });
When('I enter {string} in password field', (query) => {
    cy.get('#psw').type(query)
    cy.wait(500)
});
When('I click login button', () => {
    cy.get('#button2').click()
    });
Then('page title should contain {string}', (expected) => {
    cy.get("h1").should('contain', expected)
    });