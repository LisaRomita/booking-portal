/// <reference types="cypress" />

import { callbackify } from "util"

context('Dashboard', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/dashboard')
    })

    it('preventivo', () => {
        cy.get("#button4").should('be.disabled')
        cy.get('#arrivo').type("2020-06-22").should('have.value', '2020-06-22')
        cy.get('#partenza').type("2020-06-24").should('have.value', '2020-06-24')
        cy.get('#adulti').select("2 adulti")
        cy.get('#adulti').should('have.value', '2')
        cy.get('#bambini').select("1 bambino")
        cy.get('#bambini').should('have.value', '1')
        cy.get('#stanze').select("1 stanza")
        cy.get('#stanze').should('have.value', '1')
        cy.get("#button4").click()
        cy.get('#tot').should('contain', 'A partire da')
    })

    it('prenotazione stanza singola', () => {
        cy.get("#singola").click()
        cy.url().should('be', 'http://localhost:4200/detail/1')
        cy.get('h2').should('contain', 'SINGOLA')
        cy.get('#button5').click()
        cy.url().should('be', 'http://localhost:4200/prenota/1')
        cy.get('#button6').should('be.disabled')
        cy.get('#nome')
        .type('nome').should('have.value', 'nome')
        cy.get('#cognome')
        .type('cognome').should('have.value', 'cognome')
        cy.get('#mail')
        .type('mail@mail.com').should('have.value', 'mail@mail.com')
        cy.get('#arrivo').type("2020-06-22").should('have.value', '2020-06-22')
        cy.get('#partenza').type("2020-06-24").should('have.value', '2020-06-24')
        cy.get('#adulti').select("2 adulti")
        cy.get('#adulti').should('have.value', '2')
        cy.get('#bambini').select("1 bambino")
        cy.get('#bambini').should('have.value', '1')
        cy.get('#stanze').select("1 stanza")
        cy.get('#stanze').should('have.value', '1')
        cy.get('#pagamento').select('Paypal')
        cy.get('#pagamento').should('have.value', '1')
        cy.get("#button6").click()
        cy.get('h1').should('contain', 'Grazie')
        cy.get('#link').click()
        cy.url().should('be', 'http://localhost:4200/dashboard')
    })
})