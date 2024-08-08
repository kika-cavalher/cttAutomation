describe('SUAP_LockersByID- Brings all the information for a specific locker.', () => {
  
  before(() => {
    cy.iHandleAEnvairmentOfVariable('TOKEN_LOCKER');
  });

  it('#Step 1 - Handle LockersByID api', () => {
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
      "/api/customer-terminals/" + factories.lockersVariables.lockerId ,
      { 'Authorization': 'Bearer ' + Cypress.env('TOKEN_LOCKER') },
      ""
    );
  })

  it('#Step 2- Validate LockersByID api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})