describe('SUAP_invoiceRequest- ???', () => {

  it('#Step 1 - Handle invoiceRequest api', () => {
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
      '/cttinvoice/api/v1/scecf/invoiceRequest',
      factories.headersInvoice,
      factories.invoiceBody
    );
});

  it('#Step 2- Validate invoiceRequest api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})