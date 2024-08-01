import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_LockersToken- Extract the token that is used in GET lockers to access all lockers in a country', () => {


// Como deixar o ultimo valor default para nao precisar seguir uma ordem os testes?
  it('#Step 1 - Handle LockersToken api', () => {
    const env = Cypress.env('env');
  
    cy.SUAP_iRunApiRequest(
        env + "ExtAuth",
        "POST",
        "/auth/realms/brain24/protocol/openid-connect/token",
        env.headersLockersUrlencoded,
        cy.iChangeBodyFormat(env.bodyLockersToken)
    );
    const response = Cypress.env('apiResponse')
    Cypress.env('TOKEN_LOCKER', response.access_token)
});

  it('#Step 2- Validate LockersToken api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})