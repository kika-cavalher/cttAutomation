describe('SUAP_GetHitList- ???', () => {

  it('#Step 1 - Handle GetHitList api', () => {
    const env = Cypress.env('environment').toLowerCase();
    
    let factories;
    if (env === 'qa') {
      factories = require('../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "POST",
      '/doXenter/imageManager/api/v1/document/list',
      factories.headersDocuments,
      factories.documentsBody
    );
});

  it('#Step 2- Validate GetHitList api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})