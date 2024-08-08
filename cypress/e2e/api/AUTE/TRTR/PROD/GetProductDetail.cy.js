describe('SUAP_GetProductDetail- ?', () => {

  it('#Step 1 - Handle GetProductDetail api', () => {
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
      '/productsrs/api/v1/products/ESPC006.01?getAllInfo=X',
      factories.headersProduct,
      ""
    );
});

  it('#Step 2- Validate GetProductDetail api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})