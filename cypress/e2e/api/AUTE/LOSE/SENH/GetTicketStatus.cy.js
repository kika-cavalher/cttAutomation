describe('SUAP_GetTicketStatus- ?', () => {

  before(() => {
    cy.iHandleAEnvairmentOfVariable('STORE_ID');
    cy.iHandleAEnvairmentOfVariable('SERVICE_ID');
    cy.iHandleAEnvairmentOfVariable('STORE_TICKET');
  });

  it('#Step 1 - Handle GetTicketStatus api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "GET",
      '/digitalticketrs/api/v1/ctt/stores/' + Cypress.env('STORE_ID') + '/services/' + Cypress.env('SERVICE_ID') + '/tickets' + Cypress.env('STORE_TICKET'),
      factories.headersTicketPassToStore,
      ""
    );
  });
  it('#Step 2- Validate GetTicketStatus api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})