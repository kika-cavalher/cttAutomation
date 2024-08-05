import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_ChangeCarrier- ??', () => {

  it('#Step 1 - Handle ChangeCarrier api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Track",
        "POST",
        '/v2/changecarrier',
        env.headers17Token,
        env.trackDetailsUpdateBody
    );
});

  it('#Step 2- Validate ChangeCarrier api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})