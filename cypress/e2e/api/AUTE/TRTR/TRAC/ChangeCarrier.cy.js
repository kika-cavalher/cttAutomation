describe('SUAP_ChangeCarrier- ??', () => {

  it('#Step 1 - Handle ChangeCarrier api', () => {
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
      '/v2/changecarrier',
      factories.headers17Token,
      factories.trackDetailsUpdateBody
    );
});

  it('#Step 2- Validate ChangeCarrier api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})