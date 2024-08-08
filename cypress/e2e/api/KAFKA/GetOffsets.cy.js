describe('SUAP_GetOffsets- ???', () => {

  it('#Step 1 - Handle GetOffsets api', () => {
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
      '/kafka-proxy-api/v1/topics/pt.prd.enr.logistics.orders-events.v1/partitions/1/offsets',
      factories.headersKafka,
      ""
    );
});

  it('#Step 2- Validate GetOffsets api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})