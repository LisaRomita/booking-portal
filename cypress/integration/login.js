/// <reference types="cypress" />

context('Login', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/login')
    })

    it('login corretto', () => {
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
        cy.url().should('eq', 'http://localhost:4200/dashboard')
        cy.get('h1').should('contain', 'mrossi')

    })

    it('login con password sbagliata', () => {
        cy.get('#email')
        .type('mrossi').should('have.value', 'mrossi')
        cy.get('#button2').should('be.disabled')
        cy.get('#psw')
        .type('mross').should('have.value', 'mross')
        cy.get('#button2').click()
        cy.get('#alert').should('contain', 'password')

    })
})