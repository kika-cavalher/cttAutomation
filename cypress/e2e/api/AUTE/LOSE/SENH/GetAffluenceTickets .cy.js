describe('SUAP_GetAffluenceTickets- ?', () => {

  before(() => {
    cy.iHandleAEnvairmentOfVariable('STORE_ID');
  });

  it('#Step 1 - Handle GetAffluenceTickets api', () => {
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
      '/digitalticketrs/api/v1/ctt/stores/' + Cypress.env('STORE_ID') + '/affluence',
      factories.headersTicket,
      ""
    );
  });
  it('#Step 2- Validate GetAffluenceTickets api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})