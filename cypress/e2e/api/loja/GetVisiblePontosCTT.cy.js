import { qa } from '../../../support/factories/qa'

describe('SUAP_GetVisiblePontosCTT- Describe', () => {

  it('#Step 1 - Handle GetVisiblePontosCTT api', () => {
    cy.SUAP_iRunApiRequest(
      "qaSite",
      "POST",
      "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetVisiblePontosCTTServ",
      qa.HeadersStore,
      {'TipoPontos':'EC', 'CodCategoria': '0006'}
    )
  })

  it('#Step 2- Validate GetVisiblePontosCTT api', () => {
    cy.SUAP_iValidateRequestWithoutStatus500()
  })
})

//Salvar variavel STORE_ID 