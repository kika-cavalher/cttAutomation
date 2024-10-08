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
      "PUT",
      '/payshop/wallet/api/v1/topups/D4962938-72CC-45BE-AF35-CEA6F4CF69B0',
      factories.headersWallet,
      factories.payshopCreatTopUp
    );
});

  it('#Step 2- Validate PostWallet api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})