describe('SUAP_GetWallets- ???', () => {

  it('#Step 1 - Handle GetWallets api', () => {
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
      '/payshop/wallet/api/v1/wallets/1/49E3CE81-6AE4-459C-9AC8-9BFA73F45859',
      factories.headersWallet,
      ""
    );
});

  it('#Step 2- Validate GetWallets api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})