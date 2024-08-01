import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetNewTicket - ?', () => {

  it('#Step 1 - Handle GetNewTicket api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
      env + "Site",
      "POST",
      '/digitalticketrs/api/v1/ctt/stores/' + Cypress.env('STORE_ID') + '/services/' + Cypress.env('SERVICE_ID') + '/tickets' ,
      env.headersTicketPassToStore,
      ""
    );
  });
  it('#Step 2- Validate GetNewTicket api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})