/// <reference types="cypress" />

describe('Test Add New Order to the Store',function() {

    it('Add New Order Pet', function() {
        cy.request({
            method : 'POST',
            url : 'https://petstore.swagger.io/v2/store/order',
            body: {
                "id": 2,
                "petId": 1,
                "quantity": 0,
                "shipDate": "2022-04-13T07:01:24.607Z",
                "status": "placed",
                "complete": true
              }
        }).then((res) => {
            expect(res.status).equal(200);
            cy.log(JSON.stringify(res))
            expect(res.body).has.property('id', 2)
            expect(res.body).has.property('petId', 1)
            expect(res.body).has.property('status', 'placed')
        })
    })

})