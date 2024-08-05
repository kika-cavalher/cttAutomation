import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_LastEvent- ?', () => {

  it('#Step 1 - Handle LastEvent api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        '/tracktracers/api/v2/events/last/CA566252034DE',
        env.headersObject,
        ""
    );
});

  it('#Step 2- Validate LastEvent api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})