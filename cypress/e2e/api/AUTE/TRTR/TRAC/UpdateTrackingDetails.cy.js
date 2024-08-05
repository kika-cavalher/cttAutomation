import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_UpdateTrackingDetails- ??', () => {

  it('#Step 1 - Handle UpdateTrackingDetails api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Server",
        "POST",
        '/DF_TrackTrace_API/rest/Webhook_17TRACK_API/UpdateTrackingDetails',
        env.headers17Token,
        env.UpdateTrackingDetailsBody
    );
});

  it('#Step 2- Validate UpdateTrackingDetails api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})