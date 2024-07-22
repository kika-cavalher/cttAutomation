import { qa } from '../../../support/factories/qa'

describe('SUAP_GetPontoCTTDetailCustom- Describe', () => {

  it('#Step 1 - Handle GetPontoCTTDetailCustom api', () => {
    cy.SUAP_iRunApiRequest(
      "qaSite",
      "POST",
      "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetPontoCTTDetailCustom",
      qa.HeadersStore,
      {'CodOrgPonto':'8810555'}
    )
  })

  it('#Step 2- Validate GetPontoCTTDetailCustom api', () => {
    cy.SUAP_iValidateRequestWithoutStatus500()
  })
})