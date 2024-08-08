describe('SUAP_PaymentsRequests- ???', () => {

  it('#Step 1 - Handle PaymentsRequests api', () => {
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
      '/dem/api/v1/mb/payments/requests/' + factories.tollsVariable.licensePlates,
      factories.headersTolls,
      ""
    );
});

  it('#Step 2- Validate PaymentsRequests api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})