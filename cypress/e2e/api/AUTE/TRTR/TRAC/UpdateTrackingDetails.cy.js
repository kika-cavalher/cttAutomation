describe('SUAP_UpdateTrackingDetails- ??', () => {

  it('#Step 1 - Handle UpdateTrackingDetails api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "server",
      "POST",
      '/DF_TrackTrace_API/rest/Webhook_17TRACK_API/UpdateTrackingDetails',
      factories.headers17Token,
      factories.UpdateTrackingDetailsBody
    );
});

  it('#Step 2- Validate UpdateTrackingDetails api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})