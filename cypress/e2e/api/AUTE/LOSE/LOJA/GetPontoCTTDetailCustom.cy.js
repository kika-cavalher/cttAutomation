describe('SUAP_GetPontoCTTDetailCustom- Shows details for a specific store.', () => {

  it('#Step 1 - Handle GetPontoCTTDetailCustom api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "POST",
      "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetPontoCTTDetailCustom",
      factories.headersPointCTT,
      factories.storeVariables.CodOrgPonto

    );
});

  it('#Step 2- Validate GetPontoCTTDetailCustom api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})