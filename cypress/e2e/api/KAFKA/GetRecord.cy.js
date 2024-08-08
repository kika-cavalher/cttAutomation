describe('SUAP_GetRecord- ???', () => {

  it('#Step 1 - Handle GetRecord api', () => {
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
      "GET",
      '/kafka-proxy-api/v1/consumers/APPCTT_PRD2/instances/InstancePartition9/records?timeout=60000&max_bytes=2480000',
      factories.headersKafka,
      ""
    );
});

  it('#Step 2- Validate GetRecord api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})