describe("This is our first Test", () => {
    it("Should return true", () => {
        expect(true).to.equal(true);
    });
});

describe("Testing our form inputs", () => {
    beforeEach(function () {
        // runs before each test in this block
        cy.visit("http://localhost:3000");
      });

    it("Input Name into the Name Input", () => {
        // Arrange: Get element we want.
        // Act: Mimic user interaction.
        // Assert: Test/ Verify
        // cy.pause();
        cy.get('input[name="name"]')
         .type("Kevin Clower")
         .should("have.value", "Kevin Clower")
         .type(" is awesome")
         .should("have.value", "Kevin Clower is awesome")
        //  .clear();  
        // cy.contains("Name is a required field.")

        cy.get('[for="email"] > input')
         .type("Kclower@gmail.com")
         .should("have.value", "Kclower@gmail.com")

        cy.get('textarea')
        .type("I like to volunteer all my time to good causes.")
        .should("have.value", "I like to volunteer all my time to good causes.")

        cy.get('select')
         .select('Newsletter') // Select the 'user-1' option
         .should("have.value", "Newsletter")
        
        cy.get('input[type="checkbox"]')
         .check()
         .should("be.checked");

         cy.get('[data-cy="submit-btn"]').click()

        //  cy.get('form')
        //  .submit() // Submit a form
    });
});
