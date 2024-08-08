describe('SUAP_PostOffsetPositions- ???', () => {

  it('#Step 1 - Handle PostOffsetPositions api', () => {
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
      '/kafka-proxy-api/v1/consumers/APPCTT_PRD2/instances/InstancePartition9/positions',
      factories.headersKafka,
      factories.positionsBody
    );
});

  it('#Step 2- Validate PostOffsetPositions api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})