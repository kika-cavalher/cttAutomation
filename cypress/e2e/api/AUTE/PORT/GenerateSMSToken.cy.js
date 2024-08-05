import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GenerateSMSToken- Send a code to the indicated cell phone.', () => {

  it('#Step 1 - Handle GenerateSMSToken api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/dem/api/v1/sms/token',
        env.headersTolls,
        '{' + 
        env.tollsPaymentBody.channelID, 
        env.tollsPaymentBody.phone,
        env.tollsPaymentBody.language,
        env.tollsPaymentBody.storeID,
        env.tollsPaymentBody.userID,
        + '}'
    );
});

  it('#Step 2- Validate GenerateSMSToken api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})