describe('issues page', () => {

  context('sanity test', () => {

    it('page gets rendered and first 30 issues get listed', () => {
      cy.visit('/')
      cy.get('.issue').should('have.length', 30)
    })

  })

  context('filter buttons work', () => {

    it('filter only by open issues', () => {
      cy.visit('/')
      cy.get('.switch-button').contains('open').click()
      cy.get('.issue-icon--closed').should('have.length', 0)
    })

    it('filter only by closed issues', () => {
      cy.visit('/')
      cy.get('.switch-button').contains('closed').click()
      cy.get('.issue-icon--open').should('have.length', 0)
    })

  })

  context('infinite scroll', () => {

    it('scrolling down to the end of the page loads 30 more issues', () => {
      cy.visit('/')
      cy.get('.issue').should('have.length', 30)
      cy.get('.scroll-anchor').scrollIntoView()
      cy.get('.issue').should('have.length', 60)
    })

    it('mobile devices - scrolling down to the end of the page loads 30 more issues', () => {
      cy.viewport('iphone-6')
      cy.visit('/')
      cy.get('.issue').should('have.length', 30)
      cy.get('.scroll-anchor').scrollIntoView()
      cy.get('.issue').should('have.length', 60)
    })

  })
})
