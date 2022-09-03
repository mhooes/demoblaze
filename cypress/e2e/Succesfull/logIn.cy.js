///  <reference types="Cypress" />

describe('Log in', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com');
        cy.title().should('contain', 'STORE')
    });

    it('Exito al hacer log in', () => {
        cy.get('#login2').click();
        cy.get('#loginusername').type('a');
        cy.get('#loginpassword').type('a');
        cy.get('#logInModal .btn-primary').click();
        cy.contains('Welcome').should('be.visible')

    });

    it('Fallo al hacer log in con password invalida', () => {
        cy.get('#login2').click();
        cy.get('#loginusername').type('a');
        cy.get('#loginpassword').type('asdasdw');
        cy.get('#logInModal .btn-primary').click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('Wrong password.');
        });
    });

    it('Fallo al hacer log in con usuario invalido', () => {
        cy.get('#login2').click();
        cy.get('#loginusername').type('908rssbfudv');
        cy.get('#loginpassword').type('a');
        cy.get('#logInModal .btn-primary').click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('User does not exist.');
        });
    });

    it('Exito al hacer log out', () => {
        cy.get('#login2').click();
        cy.get('#loginusername').type('a');
        cy.get('#loginpassword').type('a');
        cy.get('#logInModal .btn-primary').click();
        cy.contains('Log out').should('be.visible').click();
        cy.contains('Log out').should('not.be.visible');

    });


})