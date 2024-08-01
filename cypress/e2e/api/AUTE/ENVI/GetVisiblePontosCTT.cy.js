describe('SUAP_GetVisiblePontosCTT- ?', () => {

  it('#Step 1 - Handle GetVisiblePontosCTT api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetVisiblePontosCTT",
        env.headersGeo,
        '{' + env.shippingVariables.TipoPontos + '}'
    );
});

  it('#Step 2- Validate GetVisiblePontosCTT api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})