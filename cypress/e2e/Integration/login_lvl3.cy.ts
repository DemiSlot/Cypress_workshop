describe("Login", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("Should log in without issues with all users", () => {
        cy.fixture("login-data.json").then((loginData) => {
            loginData.users.forEach((user) => {
                cy.login(user.username, user.password)
            })
        })
    })
})