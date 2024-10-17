describe('Burger Order Buttons', () => {
    const burgers = [
      { name: 'McCaterpillar', url: '/place-order?burger=McCaterpillar' },
      { name: 'Double Trouble', url: '/place-order?burger=DoubleTrouble' },
      { name: 'Jamburger', url: '/place-order?burger=Jamburger' },
      { name: 'KrabbyPatty', url: '/place-order?burger=KrabbyPatty' }
    ];
  
    burgers.forEach(({ name, url }) => {
      it(`should navigate to the correct place-order page for ${name}`, () => {
        cy.visit('/');
        cy.contains('Order').click();
        
        cy.url().should('include', '/order');
        cy.get('.box').should('be.visible'); // Ensure burgers are visible
        cy.contains(name).parents('.box').find('button').click();
  
        cy.url().should('include', url);
        cy.contains(name); // Check if the burger name is displayed
  
        cy.go('back');
      });
    });
  });
  