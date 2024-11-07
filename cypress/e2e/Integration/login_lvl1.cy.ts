describe("Login", () => {
    it("Should log in without issues", () => {
        cy.visit("/")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce", {log:false})
        cy.get("#login-button").click()
        cy.location().then((location) => {
            cy.wrap(location.href).should(
                "contain",
                "inventory.html"
            )
        })
    })
})