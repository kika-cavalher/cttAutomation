describe('SUAP_ConfirmLPP- ????', () => {

  it('#Step 1 - Handle ConfirmLPP api', () => {
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
      ""
    );
});

  it('#Step 2- Validate ConfirmLPP api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})