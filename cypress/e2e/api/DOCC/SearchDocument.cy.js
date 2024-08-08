describe('SUAP_SearchDocument- ???', () => {

  it('#Step 1 - Handle SearchDocument api', () => {
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
      '/doXenter/imageManager/api/v1/document/search',
      factories.headersDocuments,
      factories.searchDocumentBady
    );
});

  it('#Step 2- Validate SearchDocument api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})