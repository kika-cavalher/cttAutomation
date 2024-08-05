import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetWallets- ???', () => {

  it('#Step 1 - Handle GetWallets api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        '/payshop/wallet/api/v1/wallets/1/49E3CE81-6AE4-459C-9AC8-9BFA73F45859',
        env.headersWallet,
        ""
    );
});

  it('#Step 2- Validate GetWallets api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})