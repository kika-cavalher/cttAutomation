import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetCatalog- ?', () => {

  it('#Step 1 - Handle GetCatalog api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        '/productsrs/api/v1/catalog/:catalogId',
        env.headersProduct,
        ""
    );
});

  it('#Step 2- Validate GetCatalog api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})