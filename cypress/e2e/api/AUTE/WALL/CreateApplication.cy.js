describe('SUAP_CreateApplication- ???', () => {

  it('#Step 1 - Handle CreateApplication api', () => {
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
      '/payshop/wallet/api/v1/applications',
      factories.headersWallet,
      factories.walletVariables
    );
});

  it('#Step 2- Validate CreateApplication api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})