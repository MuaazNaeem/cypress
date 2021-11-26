describe('test suite', () => { 
    it('api test case 01', () => {
        cy.request('POST', 'http://localhost:3000/api/users/login', {user: {email: "muaaz.naeem1@gmail.com", password: "admin123"}}).then(
  (response) => {
    
    expect(response.status).equals(200)
    expect(response.body.user).to.have.property('email', 'muaaz.naeem1@gmail.com') // true


  }
)

    })

    it('api test case 02', () => {
        cy.request('http://localhost:3000/api/articles?limit=10&offset=0').then(
  (response) => {
    
    
    expect(response.status).equals(200)
    expect(response.body.articlesCount).greaterThan(1) // true
        

  }
)

    })

    })