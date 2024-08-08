describe('SUAP_GetUserinfoby - Create a new user', () => {

  it('#Step 1 - GetUserinfoby api', () => {
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
        "/digitalfactoryrs/users/FF057D3E-285C-4482-BDFC-AD0B28DEAB6B",
        factories.headersLockers,
        ""
    );
  });

  it('#Step 2 - Validate GetUserinfoby api', () => {
    cy.SUAP_iValidateServerRequestError();
  });
});