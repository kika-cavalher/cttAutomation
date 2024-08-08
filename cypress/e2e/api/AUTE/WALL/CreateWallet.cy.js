describe('SUAP_CreateWallet- ???', () => {

  it('#Step 1 - Handle CreateWallet api', () => {
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
      '/payshop/wallet/api/v1/wallets/1/49E3CE81-6AE4-459C-9AC8-9BFA73F45859',
      factories.headersWallet,
      factories.createWalletBody
    );
});

  it('#Step 2- Validate CreateWallet api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})