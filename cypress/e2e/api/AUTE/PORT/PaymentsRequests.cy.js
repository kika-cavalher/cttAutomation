import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_PaymentsRequests- ???', () => {

  it('#Step 1 - Handle PaymentsRequests api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        '/dem/api/v1/mb/payments/requests/' + env.tollsVariable.licensePlates,
        env.headersTolls,
        ""
    );
});

  it('#Step 2- Validate PaymentsRequests api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})