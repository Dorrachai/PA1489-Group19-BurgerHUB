describe('Place Orders for Each Burger', () => {
  const burgers = [
    { name: 'McCaterpillar', url: '/place-order?burger=McCaterpillar' },
    { name: 'Double Trouble', url: '/place-order?burger=DoubleTrouble' },
    { name: 'Jamburger', url: '/place-order?burger=Jamburger' },
    { name: 'KrabbyPatty', url: '/place-order?burger=KrabbyPatty' }
  ];

  burgers.forEach(({ name, url }) => {
    it(`should place an order for ${name}`, () => {
      cy.visit(url);

      cy.contains(name);
      cy.get('select[name="sides"]').select('French fries');
      cy.get('select[name="drink"]').select('Milk');

      cy.get('button[type="submit"]').click();
      cy.contains('Order placed successfully!');
      cy.contains(/Order Number: \d+/).should('exist');
    });
  });
});
