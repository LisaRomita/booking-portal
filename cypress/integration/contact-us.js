/// <reference types="cypress" />

context('ContactUs', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/contact')
    })
  
    it('scrivere mail correttamente', () => {
      cy.get('#email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
    })
    it('scrivere messaggio correttamente', () => {
        cy.get('#text')
        .type('Remember, be nice!').should('have.value', 'Remember, be nice!')
    })
    it('button disabilitato', () => {
        cy.get('#button1').should('be.disabled')
    })
    it('submit form', () => {
        cy.get('#email')
        .type('fake@email.com')
        cy.get('#text')
        .type('Remember, be nice!')
        cy.get('#form1').submit()
        cy.get("#div1").should('contain', 'Grazie, risponderemo il prima possibile')
        cy.get('#a1').click({force: true})
        cy.url().should('be', 'http://localhost:4200/dashboard')
    })
    
})