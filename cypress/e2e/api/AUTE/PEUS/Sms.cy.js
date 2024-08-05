import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_Sms- ?', () => {

  it('#Step 1 - Handle Sms api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/smsgatewayrs/v1/sms',
        env.headersProfile,
        env.smsVariables
    );
});

  it('#Step 2- Validate Sms api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})