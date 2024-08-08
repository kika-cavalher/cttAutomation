describe('SUAP_PutUserPassword- The user can change the password through this endpoint.', () => {

  it('#Step 1 - Handle PutUserPassword api', () => {
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
      '/digitalfactoryrs/users/' + factories.profileVariables.ClientSecret + '/changePassword',
      factories.headersProfile,
      factories.passwordVariables
    );
});

  it('#Step 2- Validate PutUserPassword api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})