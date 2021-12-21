///<reference types="cypress"/>

context("home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  // it("can click the get started button, access editable titles and change them", () => {
  //   cy.contains("Get Started").click()
  //   const newItem = 'New Test Title'
  //   const newItem2 = 'Another Test Title'
  //   cy.get("[data-cy=mainGraphTitleModal]")
  //   .contains('Particle Size Distribution')
  //   .clear()
  //   .type(`${newItem}`)
  //   .should('have.value', newItem)
  //   cy.get("[data-cy=productTitle]")
  //   .contains('Product title goes here')
  //   .clear()
  //   .type(`${newItem2}`)
  //   .should('have.value', newItem2)
  // });

});