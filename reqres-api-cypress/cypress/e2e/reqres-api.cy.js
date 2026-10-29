const API_KEY = Cypress.env('REQRES_API_KEY')

describe('Verifikasi Endpoint ReqRes', () => {

    it('List Users', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            headers: {
                'x-api-key': API_KEY
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('data')
            expect(response.body.data[0]).to.have.property('email')
        })
    })

    it('Single User', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'x-api-key': API_KEY
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data.id).to.eq(2)
            expect(response.body.data.email).to.contain('@')
        })
    })

    it('User Not Found', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            headers: {
                'x-api-key': API_KEY
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.be.an('object')
        })
    })

    it('List Resources', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown',
            headers: {
                'x-api-key': API_KEY
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('data')
            expect(response.body.data[0]).to.have.property('name')
        })
    })

    it('Single Resource', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/2',
            headers: {
                'x-api-key': API_KEY
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data.id).to.eq(2)
            expect(response.body.data).to.have.property('color')
        })
    })

    it('Resource Not Found', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/23',
            headers: {
                'x-api-key': API_KEY
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.be.an('object')
        })
    })

    it('Create User', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            headers: {
                'x-api-key': API_KEY
            },
            body: {
                name: 'sanber',
                job: 'tester'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq('sanber')
            expect(response.body.job).to.eq('tester')
            expect(response.body).to.have.property('id')
        })
    })

    it('Update User PUT', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'x-api-key': API_KEY
            },
            body: {
                name: 'sanber',
                job: 'QA Engineer'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('sanber')
            expect(response.body.job).to.eq('QA Engineer')
            expect(response.body).to.have.property('updatedAt')
        })
    })

    it('Update User PATCH', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'x-api-key': API_KEY
            },
            body: {
                job: 'Automation Tester'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.job).to.eq('Automation Tester')
            expect(response.body).to.have.property('updatedAt')
        })
    })

    it('Delete User', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'x-api-key': API_KEY
            }
        }).then((response) => {
            expect(response.status).to.eq(204)
        })
    })

    it('Register Successful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            headers: {
                'x-api-key': API_KEY
            },
            body: {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id')
            expect(response.body.token).to.be.a('string')
        })
    })

    it('Login Successful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            headers: {
                'x-api-key': API_KEY
            },
            body: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.token).to.be.a('string')
            expect(response.body.token).to.not.be.empty
        })
    })

})
