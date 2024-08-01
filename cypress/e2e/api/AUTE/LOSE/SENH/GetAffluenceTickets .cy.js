import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetAffluenceTickets- ?', () => {

  it('#Step 1 - Handle GetAffluenceTickets api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
      env + "Site",
      "GET",
      '/digitalticketrs/api/v1/ctt/stores/' + Cypress.env('STORE_ID') + '/affluence',
      env.headersTicket,
      ""
    );
  });
  it('#Step 2- Validate GetAffluenceTickets api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})