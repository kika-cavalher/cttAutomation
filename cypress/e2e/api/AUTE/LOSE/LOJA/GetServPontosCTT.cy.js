describe('SUAP_GetServPontosCTT- Brings a list of all service categories from all stores.', () => {

  it('#Step 1 - Handle GetServPontosCTT api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "POST",
      "/CTTServicesProxyPontosCTTGeoRef/api/GeoRef/GetServPontosCTT",
      factories.headersPointCTT,
      factories.storeVariables.CodOrgPonto
    ).then((response) => {
      if (response && response.status === 200) {
        const response = Cypress.env('apiResponse')
        const lastCategory = response.Servicos.Servico
        const firstStoreId = lastCategory[lastCategory.length - 1].CodCategoria;
        Cypress.env('STORE_ID', firstStoreId)
      }
    });
  });

  it('#Step 2- Validate GetServPontosCTT api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})