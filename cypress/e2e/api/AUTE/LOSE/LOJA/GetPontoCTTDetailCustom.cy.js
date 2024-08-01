import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetPontoCTTDetailCustom- Shows details for a specific store.', () => {

  it('#Step 1 - Handle GetPontoCTTDetailCustom api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetPontoCTTDetailCustom",
        env.headersPointCTT,
        '{' + 
        env.storeVariables.CodOrgPonto
        + '}'
    );
});

  it('#Step 2- Validate GetPontoCTTDetailCustom api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})