describe('SUAP_PostConsumerInstance- ???', () => {

  it('#Step 1 - Handle PostConsumerInstance api', () => {
    const env = Cypress.env('environment').toLowerCase();
    
    let factories;
    if (env === 'qa') {
      factories = require('../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "POST",
      '/kafka-proxy-api/v1/consumers/APPCTT_PRD2',
      factories.headersKafka,
      factories.consumerInstanceBody
    );
});

  it('#Step 2- Validate PostConsumerInstance api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})