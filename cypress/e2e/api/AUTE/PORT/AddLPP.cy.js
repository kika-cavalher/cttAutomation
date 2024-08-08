describe('SUAP_AddLPP- ???', () => {

  it('#Step 1 - Handle AddLPP api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "POST",
      '/dem/api/v1/licencePlates/' + factories.tollsVariable.licensePlates + '/payments',
      factories.headersTolls,
      factories.lPPBody
    );
});

  it('#Step 2- Validate AddLPP api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})