import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_CreateWallet- ???', () => {

  it('#Step 1 - Handle CreateWallet api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "PUT",
        '/payshop/wallet/api/v1/wallets/1/49E3CE81-6AE4-459C-9AC8-9BFA73F45859',
        env.headersWallet,
        env.createWalletBody
    );
});

  it('#Step 2- Validate CreateWallet api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})