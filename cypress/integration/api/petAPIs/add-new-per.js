/// <reference types="cypress" />

describe('Test Add New Pet to the Store',function() {

    it('Add New Pet', function() {
        cy.request({
            method : 'POST',
            url : 'https://petstore.swagger.io/v2/pet',
            body: {
                    "id": 6,
                    "category": {
                      "id": 0,
                      "name": "string"
                    },
                    "name": "jaguar",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 6,
                        "name": "jaguar"
                      }
                    ],
                    "status": "available"
                  }
        }).then((res) => {
            expect(res.status).equal(200);
            cy.log(JSON.stringify(res))
            expect(res.body).has.property('id', 6)
            expect(res.body).has.property('name', 'jaguar')
            expect(res.body).has.property('status', 'available')
        })
    })

})