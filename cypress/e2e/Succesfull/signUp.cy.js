/// <reference types="Cypress" />

describe('Sign Up', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com');
        cy.title().should('contains', 'STORE');
    })

     it('Exito al registrarse en la pagina con datos validos', () => {
         cy.xpath('//*[@id="signin2"]').click();
         cy.xpath('//*[@id="sign-username"]').type('#$@dfddfhdfh3aasdsd423');
         cy.xpath('//*[@id="sign-password"]').type('1')
         cy.xpath('/html/body/div[2]/div/div/div[3]/button[2]').click();
         cy.on('window:alert', (alert) => {
             expect(alert).to.equal('Sign up successful.')
         })
     });

    it('Fallo al crear usuario con datos vacios', () => {
        cy.xpath('//*[@id="signin2"]').click();
        cy.xpath('/html/body/div[2]/div/div/div[3]/button[2]').click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('Please fill out Username and Password.')
        })
    });

    it('Fallo al registrar usuario con datos ya utilizados', () => {
        cy.xpath('//*[@id="signin2"]').click();
        cy.xpath('//*[@id="sign-username"]').type('a');
        cy.xpath('//*[@id="sign-password"]').type('a')
        cy.xpath('/html/body/div[2]/div/div/div[3]/button[2]').click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('This user already exist.')
        })
    });
})