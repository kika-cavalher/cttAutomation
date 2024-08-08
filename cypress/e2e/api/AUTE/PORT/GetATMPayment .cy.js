describe('SUAP_GetATMPayment- Search for pending toll payment amounts.', () => {

  it('#Step 1 - Handle GetATMPayment api', () => {
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
      '/dem/api/v1/atm/payments/search',
      factories.headersTolls,
      factories.tollsPaymentBody
    );
});

  it('#Step 2- Validate GetATMPayment api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})