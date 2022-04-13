/// <reference types="cypress" />

describe('Test API Find Pet by ID',function() {

    it('Find Pet by ID', function() {
        cy.request({
            method : 'GET',
            url : 'https://petstore.swagger.io/v2/pet/6'
        }).then((response) => {
            const sts = response.body.id
            return sts
        }).then((sts) => {
            cy.request({
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/pet/'+sts
            }).then((response) => {
                expect(response.status).equal(200);
                expect(response.body).has.property('id');
            })
        })
    })

})