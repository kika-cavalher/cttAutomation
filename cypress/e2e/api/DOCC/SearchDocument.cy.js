import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_SearchDocument- ???', () => {

  it('#Step 1 - Handle SearchDocument api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/doXenter/imageManager/api/v1/document/search',
        env.headersDocuments,
        env.searchDocumentBady
    );
});

  it('#Step 2- Validate SearchDocument api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})