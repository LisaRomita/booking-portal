Given('I navigate to the Contact Us section', () => {
    cy.visit('http://localhost:4200/contact')
    });
When('I enter {string} in email field', (query) => {
    cy.get('#email').type(query)
    });
When('I enter {string} in text field', (query) => {
        cy.get('#text').type(query)
        });
When('I click submit button', () => {
    cy.get('#form1').submit()
    });
Then('div should contain {string}', (expected) => {
    cy.get("#div1").should('contain', expected)
    });