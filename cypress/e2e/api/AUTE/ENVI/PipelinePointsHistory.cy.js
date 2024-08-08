describe('SUAP_PipelinePointsHistory- ?', () => {

  it('#Step 1 - Handle PipelinePointsHistory api', () => {
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
      "/bms/shipping/api/v1/pipeline/points/history?parcelCode=" + factories.shippingBody.parcelCode + "&registrationID=" + factories.shippingVariables.registrationID,
      factories.headersShipping,
      ""
    );
});

  it('#Step 2- Validate PipelinePointsHistory api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})