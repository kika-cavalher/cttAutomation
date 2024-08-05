import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_PostWallet- ???', () => {

  it('#Step 1 - Handle PostWallet api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "PUT",
        '/payshop/wallet/api/v1/topups/D4962938-72CC-45BE-AF35-CEA6F4CF69B0',
        env.headersWallet,
        env.payshopCreatTopUp
    );
});

  it('#Step 2- Validate PostWallet api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})