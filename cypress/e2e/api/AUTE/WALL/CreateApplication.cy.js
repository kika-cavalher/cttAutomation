import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_CreateApplication- ???', () => {

  it('#Step 1 - Handle CreateApplication api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "PUT",
        '/payshop/wallet/api/v1/applications',
        env.headersWallet,
        env.walletVariables
    );
});

  it('#Step 2- Validate CreateApplication api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})