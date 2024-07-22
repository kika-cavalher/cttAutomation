import { qa } from '../../../support/factories/qa'

describe('SUAP_GetNearbyPontosCTT- Describe', () => {

  it('#Step 1 - Handle GetNearbyPontosCTT api', () => {
    cy.SUAP_iRunApiRequest(
      "qaSite",
      "POST",
      "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetNearbyPontosCTT",
      qa.HeadersStore,
      {'Latitude':'38.722413', 'Longitude':'-9.192700', 'Radius':'5'}
    )
  })

  it('#Step 2- Validate GetUserDetailsEPVCode api', () => {
    cy.SUAP_iValidateRequestWithoutStatus500()
  })
})