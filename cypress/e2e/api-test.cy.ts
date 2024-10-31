/// <reference types="cypress" />

describe('Reqres - Create, Update, Read, and Delete User', () => {
    
    //Declaring the URL variable
    const apiUrl = 'https://reqres.in/api';

    //Declaring the user variables
    const newUser = 
    {
        name: "John Doe",
        job: "Software Engineer"
    };

    //Declaring the updated user variables
    const updatedUser = 
    {
        name: "Jane Doe",
        job: "Senior Software Engineer"
    };


    //Creating a new user using the POST method
    it('POST: Create a new user', () => {
        // Create a new user and store the user ID for further tests
      cy.request('POST', `${apiUrl}/users`, newUser).then((response) => {
        expect(response.status).to.eq(201);
        const userId = response.body.id;
        cy.wrap(userId).as('createdUserId');
      });
    })

    //Retreive all the employees using the GET method 
    it('GET: Retrieve all employees', () => {
        cy.request(`${apiUrl}/users?page=2`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data').and.be.an('array');
        });
    });
  
    //Update the user using the PUT method
    it('PUT: Update the newly created user', function () {
        // Send a PUT request to update the user
        cy.request('PUT', `${apiUrl}/users/2`, updatedUser).then((response) => {
          // Validate the response status and the updated data
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('name', updatedUser.name);
          expect(response.body).to.have.property('job', updatedUser.job);
          cy.log(`User updated with new name: ${response.body.name} and job: ${response.body.job}`);
        });
      });

    //Delete the user using the DELETE method
    it('DELETE: Delete the newly created user', function () {
        cy.request('DELETE', `${apiUrl}/users/2`).then((response) => {
          // Validate the response status (should be 204 for a successful deletion with no content)
          expect(response.status).to.eq(204);
          cy.log(`User with ID: 2 deleted successfully`);
        });
      });
});



  


  