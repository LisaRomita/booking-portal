/// <reference types="cypress" />

context('Registrati', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/registrati')
    })

    it('registrazione corretta', () => {
        cy.get('#nome')
        .type('nome').should('have.value', 'nome')
        cy.get('#cognome')
        .type('cognome').should('have.value', 'cognome')
        cy.get('#user')
        .type('prova1').should('have.value', 'prova1')
        cy.get('#email')
        .type('email@email.it').should('have.value', 'email@email.it')
        cy.get('#password')
        .type('psw').should('have.value', 'psw')
        cy.get('#conferma')
        .type('psw').should('have.value', 'psw')
        cy.get('#button3').click()
        cy.get('h1').should('contain', 'Registrazione riuscita')
    })

    it('registrazione con user già esistente', () => {
        cy.get('#nome')
        .type('nome').should('have.value', 'nome')
        cy.get('#cognome')
        .type('cognome').should('have.value', 'cognome')
        cy.get('#user')
        .type('mrossi').should('have.value', 'mrossi')
        cy.get("#dup").should('contain', 'Esiste')
        cy.get('#button3').should('be.disabled')
    })

    it('registrazione con psw diverse', () => {
        cy.get('#nome')
        .type('nome').should('have.value', 'nome')
        cy.get('#cognome')
        .type('cognome').should('have.value', 'cognome')
        cy.get('#user')
        .type('prova2').should('have.value', 'prova2')
        cy.get('#email')
        .type('email@email.it').should('have.value', 'email@email.it')
        cy.get('#password')
        .type('psw').should('have.value', 'psw')
        cy.get('#conferma')
        .type('psw2').should('have.value', 'psw2')
        cy.get('#button3').should('be.disabled')
        cy.get('#pswDiverse').should('contain', 'password')
    })
})