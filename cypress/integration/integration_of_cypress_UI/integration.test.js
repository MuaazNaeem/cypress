describe('test suite', () => { 
    it('ui integration test case', () => {
        cy.viewport('iphone-7')
        cy.visit('http://localhost:4100/')

        cy.xpath('//a[@class="nav-link active"]')
        .invoke('text').should('eq', 'Global Feed')

        cy.xpath('//a[@href="/login"]').should('be.visible').click()
        cy.xpath('//h1')
        .invoke('text').should('eq', 'Sign In')
        cy.xpath('//input[@type="email"]').should('be.visible').clear().type('muaaz.naeem1@gmail.com')
        cy.xpath('//input[@type="password"]').should('be.visible').clear().type('admin123')
        cy.xpath('//button[@type="submit"]').should('be.visible').click()
        cy.xpath('//a[@href="/settings"]').should('exist')

        cy.xpath('//a[@href="/settings"]').should('exist').click()
        cy.xpath('//button[@class="btn btn-outline-danger"]').should('exist').click()
        cy.xpath('//a[@href="/login"]').should('exist')




    })
    })