import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_CarrierIdentification- ?', () => {

  it('#Step 1 - Handle CarrierIdentification api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Track",
        "POST",
        '/v2/carrierIdentify',
        env.headers17Token,
        env.trackVariables
    );
});

  it('#Step 2- Validate CarrierIdentification api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})