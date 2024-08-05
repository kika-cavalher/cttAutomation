import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetPaymentList- Displays a list of all payments made.', () => {

  it('#Step 1 - Handle GetPaymentList api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        'dem/api/v1/payments/list/' + env.tollsVariable.licensePlates + '?ptIndicator=true&channelID=Site',
        env.headersTolls,
        ""
    );
});

  it('#Step 2- Validate GetPaymentList api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})