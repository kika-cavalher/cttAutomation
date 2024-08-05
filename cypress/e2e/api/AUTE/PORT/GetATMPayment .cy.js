import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetATMPayment- Search for pending toll payment amounts.', () => {

  it('#Step 1 - Handle GetATMPayment api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/dem/api/v1/atm/payments/search',
        env.headersTolls,
        env.tollsPaymentBody
    );
});

  it('#Step 2- Validate GetATMPayment api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})