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
      "/odm/noneucountries/api/v1/NonEUCountries",
      factories.headersCountrys,
      factories.countriesBody
    ).then((response) => {
      if (response && response.status === 200) {
        Cypress.env('DECISION_CONFIG_ID', response.__DecisionID__);
      }
    });
  });

  it('#Step 2- Validate Simulation api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})