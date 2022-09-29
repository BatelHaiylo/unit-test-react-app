describe('empty spec', () => {
    before(() => {
      cy.visit('/')
    })
    it('load app', () => {
    })
    it('check red header', () => {
      cy.get('[data-testid="app-comp-home-h1"]')
      .contains("Home")
    })
  })
describe('home page btn', () => {
    before(() => {
        cy.visit('/')
      })
    it('check btn bg-color', () => {
        cy.get('[data-testid="app-comp-home-click-btn"]')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    })
    it('check btn color', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-testid="app-comp-home-click-btn"]')
        .should('have.css', 'color', 'rgb(255, 0, 0)')
    })
    it('check btn text', () => {
        cy.get('[data-testid="app-comp-home-click-btn"]')
        .contains('CLICK')
    })
    it('check btn class', () => {
        cy.get('[data-testid="app-comp-home-click-btn"]')
        .should('have.class', 'app-first-btn')
    })
    it('check onclick event',()=>{
        cy.get('[data-testid="app-comp-input"]')
        .type("Queen")
        cy.get('[data-testid="app-comp-home-click-btn"]')
        .click()
        // cy.get('[data-testid="app-comp-home-afterclick-header"]')
        // .type("Yehuda")
        // cy.get('[data-testid="app-comp-home-click-btn"]')
        // .click()
        cy.get('[data-testid="app-comp-home-afterclick-header"]')
        .contains("Queen")
    })
})
describe('test input element', ()=>{
    before(() => {
        cy.visit('/')
      })
    it('check input element', ()=>{
        cy.get('[data-testid="app-comp-input"]')
    })
})
