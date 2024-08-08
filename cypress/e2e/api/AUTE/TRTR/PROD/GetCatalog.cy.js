describe('SUAP_GetCatalog- ?', () => {

  it('#Step 1 - Handle GetCatalog api', () => {
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
      "GET",
      '/productsrs/api/v1/catalog/:catalogId',
      factories.headersProduct,
      ""
    );
});

  it('#Step 2- Validate GetCatalog api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})