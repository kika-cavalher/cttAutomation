import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_ProfileToken- ?', () => {

  it('#Step 1 - Handle ProfileToken api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Auth",
        "POST",
        '/profile?access_token=' + env.profileVariables.token + '&expires=' + env.profileVariables.expires,
        "",
        ""
    );
});

  it('#Step 2- Validate ProfileToken api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})