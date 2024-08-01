import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetServPontosCTT- Brings a list of all service categories from all stores.', () => {

  it('#Step 1 - Handle GetServPontosCTT api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetServPontosCTT",
        env.headersPointCTT,
        '{' + 
        env.storeVariables.CodOrgPonto
        + '}'
    );
    const response = Cypress.env('apiResponse')
    const lastCategory = response.Servicos.Servico
    const firstStoreId = lastCategory[lastCategory.length - 1].CodCategoria;
    Cypress.env('STORE_ID', firstStoreId)
});

  it('#Step 2- Validate GetServPontosCTT api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})