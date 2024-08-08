describe('SUAP_ServiceStates- Provides information on the number of passwords waiting for each service in the specific store.', () => {

  it('#Step 1 - Handle ServiceStates api', () => {
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
      '/digitalticketrs/api/v1/ctt/stores/' + Cypress.env('STORE_ID') + '/services',
      factories.headersTicketPassToStore,
      ""
    ).then((response) => {
      if (response && response.status === 200) {
        const response = Cypress.env('apiResponse')
        Cypress.env('SERVICE_ID', response.ticket_services[0].service_id)
      }
    });
  });

  it('#Step 2- Validate ServiceStates api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})