import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_PostWallet- ???', () => {

  it('#Step 1 - Handle PostWallet api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/payshop/wallet/api/v1/wallets/1',
        env.headersWallet,
        env.walletVariables
    );
});

  it('#Step 2- Validate PostWallet api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})