/// <reference types="cypress" />

describe('Test Add New Pet to the Store',function() {

    it('Add New Pet', function() {
        cy.request({
            method : 'DELETE',
            url : 'https://petstore.swagger.io/v2/pet/6',
        }).then((res) => {
            expect(res.status).equal(200);
            cy.log(JSON.stringify(res))
        })
    })

})