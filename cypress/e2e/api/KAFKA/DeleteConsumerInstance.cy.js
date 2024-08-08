describe('SUAP_DeleteConsumerInstance- ???', () => {

  it('#Step 1 - Handle DeleteConsumerInstance api', () => {
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
      "DELETE",
      '/kafka-proxy-api/v1/consumers/APPCTT_PRD2/instances/InstancePartition1',
      factories.headersKafka,
      ""
    );
});

  it('#Step 2- Validate DeleteConsumerInstance api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})