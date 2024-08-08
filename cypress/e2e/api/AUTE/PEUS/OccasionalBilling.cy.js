describe('SUAP_Occasional Billing- ?', () => {

  it('#Step 1 - Handle Occasional Billing api', () => {
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
      '/occasional/billing/api/v1/billing/document',
      factories.headersProfile,
      factories.billingVariables
    );
});

  it('#Step 2- Validate Occasional Billing api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})