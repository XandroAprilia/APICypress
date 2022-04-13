/// <reference types="cypress" />

describe('Test API Find Purchase Order by ID',function() {

    it('Find Puschase Order by ID', function() {
        cy.request({
            method : 'GET',
            url : 'https://petstore.swagger.io/v2/store/order/1'
        }).then((response) => {
            const sts = response.body.id
            return sts
        }).then((sts) => {
            cy.request({
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/store/order/'+sts
            }).then((response) => {
                expect(response.status).equal(200);
                expect(response.body).has.property('id');
            })
        })
    })

})