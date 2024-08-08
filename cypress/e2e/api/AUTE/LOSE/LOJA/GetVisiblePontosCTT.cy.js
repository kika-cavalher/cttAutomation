describe('SUAP_GetVisiblePontosCTT- Shows all CTT stores by Point type.', () => {

  it('#Step 1 - Handle GetVisiblePontosCTT api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../../support/factories/prd').prd;
    }

    const body = {
      'TipoPontos': factories.storeVariables.TipoPontos,
      'CodCategoria': factories.storeVariables.CodCategoria
    };

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "POST",
      "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetVisiblePontosCTTServ",
      env.headersPointCTT,
      body

    ).then((response) => {
      if (response && response.status === 200) {
        const response = Cypress.env('apiResponse')
        Cypress.env('STORE_ID', response.ArrayOfGetVisiblePontosCTTServ_Result.GetVisiblePontosCTTServ_Result[0].CodOrgPonto)
      }
    });
  });

  it('#Step 2- Validate GetVisiblePontosCTT api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})