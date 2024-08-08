describe('SUAP_LastEvent- ?', () => {

  it('#Step 1 - Handle LastEvent api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "GET",
      '/tracktracers/api/v2/events/last/CA566252034DE',
      factories.headersObject,
      ""
    );
});

  it('#Step 2- Validate LastEvent api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})