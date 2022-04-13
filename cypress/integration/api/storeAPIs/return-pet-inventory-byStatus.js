/// <reference types="cypress" />

describe('Test API Return pet inventories by status',function() {

    it('Return pet Inventories by Status', function() {
        cy.request({
            method : 'GET',
            url : 'https://petstore.swagger.io/v2/store/inventory'
        }).then((response) => {
            const sts = response.body
            return sts
        }).then((response) => {
            expect(response.status).equal(8);
            cy.log(JSON.stringify(response))
        })
    })

})
