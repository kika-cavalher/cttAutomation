describe('SUAP_GetNewTicket - ?', () => {

  it('#Step 1 - Handle GetNewTicket api', () => {
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
      "POST",
      '/digitalticketrs/api/v1/ctt/stores/' + Cypress.env('STORE_ID') + '/services/' + Cypress.env('SERVICE_ID') + '/tickets' ,
      factories.headersTicketPassToStore,
      ""
    );
  });
  it('#Step 2- Validate GetNewTicket api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})