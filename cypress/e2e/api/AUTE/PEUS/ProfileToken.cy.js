describe('SUAP_ProfileToken- ?', () => {

  it('#Step 1 - Handle ProfileToken api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
        env,
        "auth",
        "POST",
        '/profile?access_token=' + factories.profileVariables.token + '&expires=' + factories.profileVariables.expires,
        "",
        ""
    );
});

  it('#Step 2- Validate ProfileToken api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})