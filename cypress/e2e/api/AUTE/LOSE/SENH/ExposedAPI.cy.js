import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_ServiceStates- Provides information on the number of passwords waiting for each service in the specific store.', () => {

  it('#Step 1 - Handle ServiceStates api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "OutSystem",
        "POST",
        '/DF_DigitalTickets_API/rest/DigitalTicket/SendNotification',
        env.headersDigitalTicket,
        ""
    );
    const response = Cypress.env('apiResponse')
    Cypress.env('SERVICE_ID', response.ticket_services[0].service_id)
});

  it('#Step 2- Validate ServiceStates api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})