describe("App initialization", () => {
    beforeEach(() => {
        cy.server();
        cy.route("/home");
        cy.visit("http://localhost:8080");
        cy.get(".calculator__screen--result").as("screen");
    });
    
    it("displays the title correctly", () => {
        // cy.visitAndCheck();
        cy.get(".title")
        .should("contain", "Hello");
    });
    
    it("shows buttons on screen on click", () => {
        cy.get(".calculator__number").each((element, index) => {
            cy.wrap(element)
                .should('have.length', 1)
                .click()
            cy.log("@screen", index);
            cy.get("@screen")
                .contains(/\d/);
        });
        // cy.get("@screen")
        //     .should("contain", index);
    });

    it("deletes all numbers while pressing C", () => {
        cy.get(".calculator__number").each(element => {
            cy.log(element);
            cy.wrap(element).click();
        })
        cy.get("@screen").its("textContent").should("have.length", 10);
        cy.get(".calculator__operator--delete-current")
    })

    // it("logs all numbers to the screen", () => {
    //     cy.get("@screen")
    //         .should("have.length", 9)
    // })
})