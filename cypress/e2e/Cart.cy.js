/// <reference types="Cypress" />

describe('Correcto funcionamiento del Cart', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com');
        cy.title().should('contains', 'STORE');
        cy.contains('Samsung galaxy s6').click();
        cy.get('.name').should('have.text', 'Samsung galaxy s6');
        cy.get('.col-sm-12 > .btn').click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('Product added');
        });
    });

    it('Verificar si el producto se agrego al cart', () => {
        cy.get('#cartur').click();
        cy.get('.col-lg-8 > h2:nth-child(1)').should('have.text', 'Products');
        cy.get('#tbodyid > tr > td:nth-child(1)').next().should('have.text', 'Samsung galaxy s6');

    });

    it('Eliminar producto del cart', () => {
        cy.get('#cartur').click();
        cy.get('.col-lg-8 > h2:nth-child(1)').should('have.text', 'Products');
        cy.get('#tbodyid > tr > td:nth-child(1)').next().should('have.text', 'Samsung galaxy s6');
        cy.get('#tbodyid > tr > td:nth-child(4)').find('a').click();
        cy.get('#tbodyid > tr > td:nth-child(1)').should('not.exist');
    });

    it('Exito al finalizar una compra', () => {
        cy.get('#cartur').click();
        cy.get('.col-lg-8 > h2:nth-child(1)').should('have.text', 'Products');
        cy.get('#tbodyid > tr > td:nth-child(1)').next().should('have.text', 'Samsung galaxy s6');
        cy.get('.col-lg-1 > .btn').click();
        cy.get('#name').type('Emiliano');
        cy.get('#country').type('Argentina');
        cy.get('#city').type('Castelar');
        cy.get('#card').type("1234-1234-1234-1234");
        cy.get('#month').type(12);
        cy.get('#year').type(2022);
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!')
    });

    it('Fallo al finalizar una compra con datos invalidos', () => {
        cy.get('#cartur').click();
        cy.get('.col-lg-8 > h2:nth-child(1)').should('have.text', 'Products');
        cy.get('#tbodyid > tr > td:nth-child(1)').next().should('have.text', 'Samsung galaxy s6');
        cy.get('.col-lg-1 > .btn').click();
        cy.get('#name').type('@@##$$');
        cy.get('#country').type('@%^#');
        cy.get('#city').type('!&^*&^');
        cy.get('#card').type("fsdfdsf");
        cy.get('#month').type('sdfsdfsdf');
        cy.get('#year').type('asdasdasd');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.sweet-alert').should('not.be.visible')
    });

    it('Fallo al finalizar una compra con datos vacios', () => {
        cy.get('#cartur').click();
        cy.get('.col-lg-8 > h2:nth-child(1)').should('have.text', 'Products');
        cy.get('#tbodyid > tr > td:nth-child(1)').next().should('have.text', 'Samsung galaxy s6');
        cy.get('.col-lg-1 > .btn').click();
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.on('window:alert', (alert) => {
            expect(aler).to.equal('Please fill out Name and Creditcard.');
        });
    });

});