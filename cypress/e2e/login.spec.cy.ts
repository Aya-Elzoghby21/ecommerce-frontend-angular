describe('Login -> Products flow', () => {
  it('logs in and loads products', () => {
  
    cy.visit('http://localhost:4200/login');

    cy.get('input[formcontrolname="username"]').type('aya22'); 
    cy.get('input[formcontrolname="password"]').type('Aya@123');

    
    cy.contains('Login').click();


    cy.url().should('include', '/products');

    cy.get('.products-grid .card').should('have.length.greaterThan', 0);
  });
});
