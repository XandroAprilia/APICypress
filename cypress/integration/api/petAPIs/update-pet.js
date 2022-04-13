/// <reference types="cypress" />

describe('Test API Update a Pet in the store with form data',function() {

    it('Update pet at the Store', function() {
        cy.request({
            method : 'POST',
            url : 'https://petstore.swagger.io/v2/pet',
            body: {
                    "id": 4,
                    "category": {
                      "id": 0,
                      "name": "string"
                    },
                    "name": "tiger",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 4,
                        "name": "tiger"
                      }
                    ],
                    "status": "available"
                  }
        }).then((res) => {
            expect(res.status).equal(200);
            cy.log(JSON.stringify(res))
            expect(res.body).has.property('id', 4)
            expect(res.body).has.property('name', 'tiger')
            expect(res.body).has.property('status', 'available')
        }).then((updt) => {
            cy.request({
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/pet',
                body: {
                    "id": 4,
                    "category": {
                      "id": 0,
                      "name": "string"
                    },
                    "name": "siberian tiger",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 4,
                        "name": "siberian tiger"
                      }
                    ],
                    "status": "sold"
                  }
            })
        }).then((response) => {
            expect(response.status).equal(200);
            cy.log(JSON.stringify(response))
            expect(response.body).has.property('id', 4)
            expect(response.body).has.property('name', 'siberian tiger')
            expect(response.body).has.property('status', 'sold')
        })
    })

})