Given('I am logged in', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('#email').type('mrossi')
    cy.wait(500)
    cy.get('#psw').type('mrossi')
    cy.wait(500)
    cy.get('#button2').click()
    });
When('I click the logout button', () => {
    cy.get('.navbar-nav')
        .children('.nav-item').children('a#ngb-nav-3.nav-link').click()
    });
Then('the url should be {string}', (expected) => {
    cy.url().should('be', 'http://localhost:4200/logout')
    });