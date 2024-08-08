describe('SUAP_CreatePayment- ???', () => {

  it('#Step 1 - Handle CreatePayment api', () => {
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
      "PUT",
      '/payshop/wallet/api/v1/payments/49E3CE81-6AE4-459C-9AC8-9BFA73F45859',
      factories.headersWallet,
      factories.payshopBody
    );
});

  it('#Step 2- Validate CreatePayment api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})