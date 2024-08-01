describe('SUAP_Simulation- Return the shipping simulation value.', () => {

  it('#Step 1 - Handle Simulation api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        "/productsrs/api/v1/products/simulation",
        env.headersSimulation,
        env.simulationBody
    );
});

  it('#Step 2- Validate Simulation api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})