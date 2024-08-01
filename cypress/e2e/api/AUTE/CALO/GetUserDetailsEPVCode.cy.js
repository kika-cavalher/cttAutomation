import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetUserDetailsEPVCode- Shows user data associated with EPVCode', () => {

  it('#Step 1 - Handle GetUserDetailsEPVCode api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Server",
        "GET",
        "DF_Customer_API/rest/EpvAPI/GetUserDetails?EpvCode=" + env.lockersVariables.lockerId + "&pageSize=20&pageNumber=1",
        env.headersLockers,
        ""
    );
});

  it('#Step 2- Validate GetUserDetailsEPVCode api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})