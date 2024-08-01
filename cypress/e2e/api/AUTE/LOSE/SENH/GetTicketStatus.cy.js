import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetTicketStatus- ?', () => {

  it('#Step 1 - Handle GetTicketStatus api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
      env + "Site",
      "GET",
     '/digitalticketrs/api/v1/ctt/stores/' + Cypress.env('STORE_ID') + '/services/' + Cypress.env('SERVICE_ID') + '/tickets' + Cypress.env('STORE_TICKET'),
      env.headersTicketPassToStore,
      ""
    );
  });
  it('#Step 2- Validate GetTicketStatus api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})