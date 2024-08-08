describe('SUAP_CarrierIdentification- ?', () => {

  it('#Step 1 - Handle CarrierIdentification api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
        env,
        "track",
        "POST",
        '/v2/carrierIdentify',
        factories.headers17Token,
        factories.trackVariables
    );
});

  it('#Step 2- Validate CarrierIdentification api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})