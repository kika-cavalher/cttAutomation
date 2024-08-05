import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_SearchEvent- ?', () => {

  it('#Step 1 - Handle SearchEvent api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/tracktracers/api/v2/events/search',
        env.headersObject,
        env.objectBody
    );
});

  it('#Step 2- Validate SearchEvent api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})