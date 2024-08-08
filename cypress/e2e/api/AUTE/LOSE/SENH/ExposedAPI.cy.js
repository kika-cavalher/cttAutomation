describe('SUAP_ServiceStates- Provides information on the number of passwords waiting for each service in the specific store.', () => {

  it('#Step 1 - Handle ServiceStates api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../../support/factories/qa.js').qa;
    } else if (env === 'prd') {
      factories = require('../../../../../support/factories/prd.js').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "outSystem",
      "POST",
      '/DF_DigitalTickets_API/rest/DigitalTicket/SendNotification',
      factories.headersDigitalTicket,
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