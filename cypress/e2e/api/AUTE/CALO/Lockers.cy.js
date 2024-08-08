describe('SUAP_Lockers- Bring all Lockers available in the country informed', () => {

  before(() => {
    cy.iHandleAEnvairmentOfVariable('TOKEN_LOCKER');
  });
  
  it('#Step 1 - Handle Lockers api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "extService",
      "GET",
      "/api/customer-terminals?country=PT",
      { 'Authorization': 'Bearer ' + Cypress.env('TOKEN_LOCKER') },
      ""
    );
  })

  it('#Step 2- Validate Lockers api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})