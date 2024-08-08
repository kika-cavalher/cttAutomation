describe('SUAP_CreateUser - Create a new user', () => {

  it('#Step 1 - CreateUser api', () => {
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
        "/digitalfactoryrs/users",
        factories.headersLockers,
        factories.userBody
    );
  });

  it('#Step 2 - Validate CreateUser api', () => {
    cy.SUAP_iValidateServerRequestError();
  });
});