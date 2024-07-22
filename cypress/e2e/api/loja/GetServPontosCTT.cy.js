import { qa } from '../../../support/factories/qa'

describe('SUAP_GetServPontosCTT- Describe', () => {

  it('#Step 1 - Handle GetServPontosCTT api', () => {
    cy.SUAP_iRunApiRequest(
      "qaSite",
      "POST",
      "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetServPontosCTT",
      qa.HeadersStore,
      {'CodOrgPonto':'8810555'}
    )
  })

  it('#Step 2- Validate GetServPontosCTT api', () => {
    cy.SUAP_iValidateRequestWithoutStatus500()
  })
})

// Salvar variavel STORE_CATEGORY_ID 