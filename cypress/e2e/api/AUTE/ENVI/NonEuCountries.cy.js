describe('SUAP_Simulation- Return the shipping simulation value.', () => {

  it('#Step 1 - Handle Simulation api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        "/odm/noneucountries/api/v1/NonEUCountries",
        env.headersCountrys,
        env.countriesBody
    );
    const response = Cypress.env('apiResponse')
    Cypress.env('DECISION_CONFIG_ID', response.__DecisionID__)
});

  it('#Step 2- Validate Simulation api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})