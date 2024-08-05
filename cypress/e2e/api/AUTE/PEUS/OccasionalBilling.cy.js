import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_Occasional Billing- ?', () => {

  it('#Step 1 - Handle Occasional Billing api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/occasional/billing/api/v1/billing/document',
        env.headersProfile,
        env.billingVariables
    );
});

  it('#Step 2- Validate Occasional Billing api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})