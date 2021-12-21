///<reference types="cypress"/>
import {addNote, noteObj} from '../../../src/common/constants'

context("Notes", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.waitForReact();
  })

  it("Can add note", () => {
    cy.get(`[data-cy=${addNote.addNoteButton.id}]`).click();

    cy.get(`[data-cy=${addNote.title.id}]`).should('exist').click().type('Test title 1');
    cy.get(`[data-cy=${addNote.content.id}`).should('exist').click().type('Test content typed here 1');
    cy.get(`[data-cy=${addNote.submitButton.id}`).should('exist').click();

    
    cy.get(`[data-cy=${noteObj.title.id}]`).should('exist').contains('Test title 1');
    cy.get(`[data-cy=${noteObj.content.id}]`).should('exist').contains('Test content typed here 1');
  
    cy.get(`[data-cy=${noteObj.actionButton.id}`).should('exist').click();
    cy.get(`[data-cy=${noteObj.editButton.id}`).should('exist').click()
  })
});