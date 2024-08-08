describe('SUAP_GetVisiblePontosCTT- ?', () => {

  it('#Step 1 - Handle GetVisiblePontosCTT api', () => {
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
      "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetVisiblePontosCTT",
      factories.headersGeo,
      factories.shippingVariables.TipoPontos
    );
});

  it('#Step 2- Validate GetVisiblePontosCTT api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})