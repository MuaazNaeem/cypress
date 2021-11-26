describe('test suite', () => { 
    it('e2e test case', () => {
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

        
        cy.xpath('//a[@href="/editor"]').should('be.visible').click()
        cy.xpath('//button[@type="button"]').should('be.visible')
        cy.xpath('//input[@placeholder="Article Title"]').should('be.visible').clear().type('New Title for Article')
        cy.xpath('(//input[@class="form-control"])[1]').should('be.visible').clear().type('About of the Article which is about testing with cypress.')
        cy.xpath('//textarea[@placeholder="Write your article (in markdown)"]').should('be.visible').clear().type('Now you can browse privately, and other people who use this device won’t see your activity. However, downloads, bookmarks and reading list items will be saved.')
        cy.xpath('//input[@placeholder="Enter tags"]').should('be.visible').clear().type('#New_Article')
        cy.xpath('//button[@type="button"]').should('be.visible').click()
        cy.xpath('//h1')
        .invoke('text').should('eq', 'New Title for Article')   //This is to verify that the Article has been posted.

        // Comment cannot be posted as the functionality is not working. That is why comments test case has not been created.

        cy.xpath('//a[@href="/settings"]').should('exist').click()
        cy.xpath('//button[@class="btn btn-outline-danger"]').should('exist').click()
        cy.xpath('//a[@href="/login"]').should('exist')



        

        

        

        
    })
    })

