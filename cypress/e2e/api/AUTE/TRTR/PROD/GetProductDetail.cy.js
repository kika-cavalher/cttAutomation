import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetProductDetail- ?', () => {

  it('#Step 1 - Handle GetProductDetail api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        '/productsrs/api/v1/products/ESPC006.01?getAllInfo=X',
        env.headersProduct,
        ""
    );
});

  it('#Step 2- Validate GetProductDetail api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})