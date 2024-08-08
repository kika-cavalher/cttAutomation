describe('SUAP_SearchEvent- ?', () => {

  it('#Step 1 - Handle SearchEvent api', () => {
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
      "POST",
      '/tracktracers/api/v2/events/search',
      factories.headersObject,
      factories.objectBody
    );
});

  it('#Step 2- Validate SearchEvent api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})