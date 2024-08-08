describe('SUAP_GetNearbyPontosCTT- Brings the closest CTT stores to lat and long informed.', () => {

  it('#Step 1 - Handle GetNearbyPontosCTT api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../../support/factories/prd').prd;
    }

    const body = {
      'Latitude': factories.storeVariables.Latitude,
      'Longitude': factories.storeVariables.Longitude,
      'Radius': factories.storeVariables.Radius
    };

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "POST",
      "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetNearbyPontosCTT",
      body
      
    );
});

  it('#Step 2- Validate GetNearbyPontosCTT api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})