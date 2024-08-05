import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_SearchObject- ?', () => {

  it('#Step 1 - Handle SearchObject api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/tracktracers/api/v2/objects/search',
        env.headersObject,
        env.objectBody
    );
});

  it('#Step 2- Validate SearchObject api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})