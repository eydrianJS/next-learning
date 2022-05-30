/// <reference types="cypress" />

context("Home Page", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should be find message' , () => {
        cy.get("h1").contains("Welcome")
    })
})