/// <reference types="Cypress" />

describe('Filros de la pagina principal', () => {
 
    beforeEach(() => {
     cy.visit('https://www.demoblaze.com');
     cy.title().should('contains', 'STORE');
    });

    it('Verificar funcionamiento del filtro PHONES', () => {
        cy.get('a.list-group-item:nth-child(2)').click()
        cy.get('#tbodyid').find('img').should('have.length', 7);
    });

    it('Verificar funcionamiento del filtro LAPTOPS', () => {
        cy.get('a.list-group-item:nth-child(3)').click()
        cy.get('#tbodyid').find('img').should('have.length', 6)
    });

    it('Verificar funcionamiento del filtro MONITORS', () => {
        cy.get('a.list-group-item:nth-child(4)').click()
        cy.get('#tbodyid').find('img').should('have.length', 2)
    });
})