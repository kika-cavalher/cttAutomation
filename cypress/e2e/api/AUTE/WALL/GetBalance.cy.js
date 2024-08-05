import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetOperations- ???', () => {

  it('#Step 1 - Handle GetOperations api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        '/payshop/wallet/api/v1/balances/49E3CE81-6AE4-459C-9AC8-9BFA73F45859',
        env.headersWallet,
        ""
    );
});

  it('#Step 2- Validate GetOperations api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})