import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetTrackDetails- Displays information about the details of a trace.?', () => {

  it('#Step 1 - Handle GetTrackDetails api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Track",
        "POST",
        '/v2/gettrackinfo',
        env.headers17Token,
        env.trackDetailsBody
    );
    Cypress.env('CARRIER_TRACK', response.data.accepted.carrier)
});

  it('#Step 2- Validate GetTrackDetails api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})