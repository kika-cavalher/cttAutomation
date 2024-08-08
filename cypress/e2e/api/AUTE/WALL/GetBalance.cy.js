describe('SUAP_GetOperations- ???', () => {

  it('#Step 1 - Handle GetOperations api', () => {
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
      '/payshop/wallet/api/v1/balances/49E3CE81-6AE4-459C-9AC8-9BFA73F45859',
      factories.headersWallet,
      ""
    );
});

  it('#Step 2- Validate GetOperations api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})