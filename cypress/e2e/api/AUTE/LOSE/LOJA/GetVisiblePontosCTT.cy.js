import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetVisiblePontosCTT- Shows all CTT stores by Point type.', () => {

  it('#Step 1 - Handle GetVisiblePontosCTT api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetVisiblePontosCTTServ",
        env.headersPointCTT,
        '{' + 
        env.storeVariables.TipoPontos, 
        env.storeVariables.CodCategoria
        + '}'
    );
    const response = Cypress.env('apiResponse')
    Cypress.env('STORE_ID', response.ArrayOfGetVisiblePontosCTTServ_Result.GetVisiblePontosCTTServ_Result[0].CodOrgPonto)
});

  it('#Step 2- Validate GetVisiblePontosCTT api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})