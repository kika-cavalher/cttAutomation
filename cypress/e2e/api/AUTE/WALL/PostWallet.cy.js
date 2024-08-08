describe('SUAP_PostWallet- ???', () => {

  it('#Step 1 - Handle PostWallet api', () => {
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
      '/payshop/wallet/api/v1/wallets/1',
      factories.headersWallet,
      factories.walletVariables
    );
});

  it('#Step 2- Validate PostWallet api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})