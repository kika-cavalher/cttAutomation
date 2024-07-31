describe('SUAP_Lockers- Bring all Lockers available in the country informed', () => {

  it('#Step 1 - Handle Lockers api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "ExtService",
        "GET",
        "/api/customer-terminals?country=PT",
        "Bearer" + Cypress.env('TOKEN_LOCKER'),
        ""
    );
  })

  it('#Step 2- Validate Lockers api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})