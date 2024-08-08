describe('SUAP_GenerateSMSToken- Send a code to the indicated cell phone.', () => {

  it('#Step 1 - Handle GenerateSMSToken api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../support/factories/prd').prd;
    }

    const body = {
      'channelID': factories.tollsPaymentBody.channelID,
      'phone': factories.tollsPaymentBody.phone,
      'language': factories.tollsPaymentBody.language,
      'storeID': factories.tollsPaymentBody.storeID,
      'userID': factories.tollsPaymentBody.userID
    };

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "POST",
      '/dem/api/v1/sms/token',
      env.headersTolls,
      body
    );
});

  it('#Step 2- Validate GenerateSMSToken api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})