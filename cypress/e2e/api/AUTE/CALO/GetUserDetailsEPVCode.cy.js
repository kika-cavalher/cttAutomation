describe('SUAP_GetUserDetailsEPVCode - Shows user data associated with EPVCode', () => {

  it('#Step 1 - GetUserDetailsEPVCode api', () => {
    const env = Cypress.env('environment').toLowerCase();
    
    let factories;
    if (env === 'qa') {
      factories = require('../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
        env,
        "server",
        "GET",
        "/DF_Customer_API/rest/EpvAPI/GetUserDetails?EpvCode=" + factories.lockersVariables.lockerId + "&pageSize=20&pageNumber=1",
        factories.headersLockers,
        ""
    );
  });

  it('#Step 2 - Validate GetUserDetailsEPVCode api', () => {
    cy.SUAP_iValidateServerRequestError();
  });
});