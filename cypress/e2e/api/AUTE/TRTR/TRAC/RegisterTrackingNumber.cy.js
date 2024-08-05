import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_RegisterTrackingNumber- ?', () => {

  it('#Step 1 - Handle RegisterTrackingNumber api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Track",
        "POST",
        '/v2/register',
        env.headers17Token,
        env.trackVariables
    );
    Cypress.env('CARRIER_TRACK', response.data.accepted.carrier)
});

  it('#Step 2- Validate RegisterTrackingNumber api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})