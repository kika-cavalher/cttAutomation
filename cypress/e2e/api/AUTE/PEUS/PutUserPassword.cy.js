import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_PutUserPassword- The user can change the password through this endpoint.', () => {

  it('#Step 1 - Handle PutUserPassword api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "PUT",
        '/digitalfactoryrs/users/'+ env.headersProfile.x-ibm-Client-Secret +'/changePassword',
        env.headersProfile,
        env.passwordVariables
    );
});

  it('#Step 2- Validate PutUserPassword api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})