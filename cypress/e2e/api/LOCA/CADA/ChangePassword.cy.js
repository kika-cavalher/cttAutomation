describe('SUAP_ChangePassword - Create a new user', () => {

  it('#Step 1 - ChangePassword api', () => {
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
        "/digitalfactoryrs/users/75A8F5E4-6437-4D32-B9C2-390396756EC6/changePassword",
        "",
        ""
    );
  });

  it('#Step 2 - Validate ChangePassword api', () => {
    cy.SUAP_iValidateServerRequestError();
  });
});