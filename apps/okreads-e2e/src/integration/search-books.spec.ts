describe('When: Use the search feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should be able to search books by title', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
  });

  it('Then: I should see search results as I am typing', () => {
    const term = cy.get('input').type('html');
    cy.request('http://localhost:4200/api/books/search?q='+ term).then(res => {
      expect(res.status).to.eq(200);
    })    

  });
});
