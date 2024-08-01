import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_StoreAffluence- ?', () => {

  it('#Step 1 - Handle StoreAffluence api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
      env + "Site",
      "GET",
     '/digitalticketnotificationrs/api/v1/SendNotification',
      env.headersTicketPassToStore,
      env.notificationVariables
    );
  });
  it('#Step 2- Validate StoreAffluence api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})