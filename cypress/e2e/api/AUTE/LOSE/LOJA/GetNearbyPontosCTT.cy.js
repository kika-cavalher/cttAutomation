import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetNearbyPontosCTT- Brings the closest CTT stores to lat and long informed.', () => {

  it('#Step 1 - Handle GetNearbyPontosCTT api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetNearbyPontosCTT",
        env.headersPointCTT,
        '{' + 
        env.storeVariables.Latitude, 
        env.storeVariables.Longitude, 
        env.storeVariables.Radius 
        + '}'
    );
});

  it('#Step 2- Validate GetNearbyPontosCTT api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})