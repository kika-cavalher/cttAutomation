import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_CreatePayment- ???', () => {

  it('#Step 1 - Handle CreatePayment api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "PUT",
        '/payshop/wallet/api/v1/payments/49E3CE81-6AE4-459C-9AC8-9BFA73F45859',
        env.headersWallet,
        env.payshopBody
    );
});

  it('#Step 2- Validate CreatePayment api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})