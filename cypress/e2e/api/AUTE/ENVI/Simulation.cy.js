describe('SUAP_Simulation- Return the shipping simulation value.', () => {

  it('#Step 1 - Handle Simulation api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "POST",
      "/productsrs/api/v1/products/simulation",
      factories.headersSimulation,
      factories.simulationBody
    );
});

  it('#Step 2- Validate Simulation api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})