describe('SUAP_RegisterTrackingNumber- ?', () => {

  it('#Step 1 - Handle RegisterTrackingNumber api', () => {
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
      '/v2/register',
      factories.headers17Token,
      factories.trackVariables
    );
});

  it('#Step 2- Validate RegisterTrackingNumber api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})