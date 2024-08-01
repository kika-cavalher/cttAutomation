import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_LockersByID- Brings all the information for a specific locker.', () => {

  it('#Step 1 - Handle LockersByID api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "ExtService",
        "GET",
        "/api/customer-terminals/" + env.lockersVariables.lockerId ,
        "Bearer" + Cypress.env('TOKEN_LOCKER'),
        ""
    );
  })

  it('#Step 2- Validate LockersByID api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})