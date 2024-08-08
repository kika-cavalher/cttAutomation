describe('SUAP_SearchObject- ?', () => {

  it('#Step 1 - Handle SearchObject api', () => {
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
      '/tracktracers/api/v2/objects/search',
      factories.headersObject,
      factories.objectBody
    );
});

  it('#Step 2- Validate SearchObject api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})