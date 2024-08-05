import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetHitList- ???', () => {

  it('#Step 1 - Handle GetHitList api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/doXenter/imageManager/api/v1/document/list',
        env.headersDocuments,
        env.documentsBody
    );
});

  it('#Step 2- Validate GetHitList api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})