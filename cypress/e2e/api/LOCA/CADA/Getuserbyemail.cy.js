describe('SUAP_Getuserbyemail - Create a new user', () => {

  it('#Step 1 - Getuserbyemail api', () => {
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
        "/digitalfactoryrs/users/getuserbyusername?username=" + factories.userBody.userName,
        "",
        ""
    );
  });

  it('#Step 2 - Validate Getuserbyemail api', () => {
    cy.SUAP_iValidateServerRequestError();
  });
});