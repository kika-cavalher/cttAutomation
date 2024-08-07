describe('SUAP_LockersToken- Extract the token that is used in GET lockers to access all lockers in a country', () => {
  it('#Step 1 - Handle LockersToken api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../support/factories/prd').prd;
    }

    let defaultToken = Cypress.env('variables')[env]['TOKEN_LOCKER'];
    Cypress.env('TOKEN_LOCKER', defaultToken);

    cy.SUAP_iRunApiRequest(
      env,
      "extAuth",
      "POST",
      "/auth/realms/brain24/protocol/openid-connect/token",
      env.headersLockersUrlencoded,
      env.bodyLockersToken

    ).then((response) => {
      if (response && response.status === 200) {
        Cypress.env('TOKEN_LOCKER', response.access_token);
      }
    });
  });

  it('#Step 2- Validate LockersToken api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})