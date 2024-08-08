describe('SUAP_Sms- ?', () => {

  it('#Step 1 - Handle Sms api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "POST",
      '/smsgatewayrs/v1/sms',
      factories.headersProfile,
      factories.smsVariables
    );
});

  it('#Step 2- Validate Sms api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})