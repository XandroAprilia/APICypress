/// <reference types="cypress" />

describe('Test API Find Pet by Status',function() {
    
    it('Find Pet by Status', function() {
        cy.request({
            method : 'GET',
            url : 'https://petstore.swagger.io/v2/pet/findByStatus?status=available'
        }).then((response) => {
            const sts = response.body[0].status
            return sts
        }).then((sts) => {
            cy.request({
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/pet/findByStatus?status='+sts
            }).then((response) => {
                expect(response.status).equal(200);
                expect(response.body[0]).has.property('status','available');
                expect(response.body[0]).has.property('status','sold');
            })
        })
    })

})