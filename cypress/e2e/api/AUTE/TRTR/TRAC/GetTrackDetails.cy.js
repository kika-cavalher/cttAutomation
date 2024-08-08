describe('SUAP_GetTrackDetails- Displays information about the details of a trace.?', () => {

  it('#Step 1 - Handle GetTrackDetails api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "track",
      "POST",
      '/v2/gettrackinfo',
      factories.headers17Token,
      factories.trackDetailsBody
    ).then((response) => {
      if (response && response.status === 200) {
        Cypress.env('CARRIER_TRACK', response.data.accepted.carrier);
      }
    });
  });

  it('#Step 2- Validate GetTrackDetails api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})