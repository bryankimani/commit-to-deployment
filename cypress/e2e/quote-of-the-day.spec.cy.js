describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe("quote of the day spec", () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.quotable.io/quotes/random*', {
      statusCode: 200,
    });
  });

  it("displays a quote", () => {})

  it("clicks next button", () => {})
})
