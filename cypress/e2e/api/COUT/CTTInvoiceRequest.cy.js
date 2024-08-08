describe('SUAP_CTTInvoiceRequest- ???', () => {

  it('#Step 1 - Handle CTTInvoiceRequest api', () => {
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
      '/DF_Accounting_API/rest/CTTInvoiceRequest/CTTInvoiceRequest',
      factories.headersInvoice,
      factories.cttInvoiceBody
    );
});

  it('#Step 2- Validate CTTInvoiceRequest api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})