///  <reference types="Cypress" />

describe('Formuario de contacto', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com');
        //cy.title().should('contain', 'STORE');
    });


    it('Exito al enviar formulario de contacto', () => {
        cy.xpath('/html/body/nav/div[1]/ul/li[2]/a').click();
        cy.xpath('//*[@id="recipient-email"]').type('palacieush@gmail.com');
        cy.xpath('//*[@id="recipient-name"]').type('Emiliano');
        cy.xpath('//*[@id="message-text"]').type('Este es un texto de prueba');
        cy.xpath('/html/body/div[1]/div/div/div[3]/button[2]').click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('Thanks for the message!!');
        });
    });

    it('Fallo al enviar formulario de contacto', () => {
        cy.xpath('/html/body/nav/div[1]/ul/li[2]/a').click();
        cy.xpath('//*[@id="recipient-email"]').type('palacieus!@$%@');
        cy.xpath('//*[@id="recipient-name"]').type('^#$@#$');
        cy.xpath('//*[@id="message-text"]').type(' ');
        cy.xpath('/html/body/div[1]/div/div/div[3]/button[2]').click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('Please, complete all fields!!');
        });
    });

});