describe('SUAP_GetPaymentsTotal- Total of all tolls pending payment.', () => {

  it('#Step 1 - Handle GetPaymentsTotal api', () => {
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
      '/dem/api/v1/payments/total?entity=a&storeID=1&licencePlates=' + factories.tollsVariable.licensePlates + '&offset=0&perPage=10',
      factories.headersTolls,
      ""
    );
});

  it('#Step 2- Validate GetPaymentsTotal api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})