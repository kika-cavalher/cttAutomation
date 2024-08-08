describe('SUAP_CancelLPP- ????', () => {

  it('#Step 1 - Handle CancelLPP api', () => {
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
      '/dem/api/v1/licencePlates/payments/8799923121100012/confirm?channelUID=' + factories.lPPBody.channelUID,
      factories.headersTolls,
      factories.tollsVariable.motive
    );
});

  it('#Step 2- Validate CancelLPP api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})