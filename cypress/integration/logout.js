/// <reference types="cypress" />

context('Logout', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/login')
    })

    it('logout corretto', () => {
        cy.get('#email')
        .type('mrossi').should('have.value', 'mrossi')
        cy.wait(500)
        cy.get('#button2').should('be.disabled')
        cy.wait(500)
        cy.get('#psw')
        .type('mrossi').should('have.value', 'mrossi')
        cy.wait(500)
        cy.get('#button2').click()
        cy.wait(500)
        cy.url().should('be', 'http://localhost:4200/dashboard')
        cy.get('h1').should('contain', 'mrossi')
        cy.wait(500)
        cy.get('.navbar-nav')
        .children('.nav-item').children('a#ngb-nav-3.nav-link').click()
        cy.url().should('be', 'http://localhost:4200/logout')
    })
})