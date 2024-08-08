describe('SUAP_GetPointsInPipelineInfo- ?', () => {

  it('#Step 1 - Handle GetPointsInPipelineInfo api', () => {
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
      "GET",
      "/bms/shipping/api/v1/pipeline/points/info?parcelCode=" + factories.shippingBody.parcelCode + "&requestingActor=" + factories.shippingBody.requestingActor + "&channelCode=" + factories.shippingBody.channelCode ,
      factories.headersShipping,
      ""
    );
});

  it('#Step 2- Validate GetPointsInPipelineInfo api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})