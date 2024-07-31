describe('SUAP_GetPointsInPipelineInfo- ?', () => {

  it('#Step 1 - Handle GetPointsInPipelineInfo api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        "/bms/shipping/api/v1/pipeline/points/info?parcelCode=" + env.shippingBody.parcelCode + "&requestingActor=" + env.shippingBody.requestingActor + "&channelCode=" + env.shippingBody.channelCode ,
        env.headersShipping,
        ""
    );
});

  it('#Step 2- Validate GetPointsInPipelineInfo api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})