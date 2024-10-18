describe('Burger Menu Page', () => {
    it('should display all burgers', () => {
      cy.visit('/order'); 
  
      cy.get('.box-container').within(() => {
        cy.get('.box').should('have.length', 4); // 4 burger boxes
  
        cy.contains('McCaterpillar');
        cy.contains('Double Trouble');
        cy.contains('Jamburger');
        cy.contains('KrabbyPatty');
      });
    });
  });
  