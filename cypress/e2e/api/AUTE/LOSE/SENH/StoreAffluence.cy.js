describe('SUAP_StoreAffluence- ?', () => {

  it('#Step 1 - Handle StoreAffluence api', () => {
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
      '/digitalticketnotificationrs/api/v1/SendNotification',
      factories.headersTicketPassToStore,
      factories.notificationVariables
    );
  });
  it('#Step 2- Validate StoreAffluence api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})