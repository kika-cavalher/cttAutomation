describe('SUAP_GetPaymentList- Displays a list of all payments made.', () => {

  it('#Step 1 - Handle GetPaymentList api', () => {
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
      "GET",
      'dem/api/v1/payments/list/' + factories.tollsVariable.licensePlates + '?ptIndicator=true&channelID=Site',
      factories.headersTolls,
      ""
    );
});

  it('#Step 2- Validate GetPaymentList api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})