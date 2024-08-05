import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetPaymentsTotal- Total of all tolls pending payment.', () => {

  it('#Step 1 - Handle GetPaymentsTotal api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        '/dem/api/v1/payments/total?entity=a&storeID=1&licencePlates=' + env.tollsVariable.licensePlates + '&offset=0&perPage=10',
        env.headersTolls,
        ""
    );
});

  it('#Step 2- Validate GetPaymentsTotal api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})