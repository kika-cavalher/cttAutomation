import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_CTTInvoiceRequest- ???', () => {

  it('#Step 1 - Handle CTTInvoiceRequest api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/DF_Accounting_API/rest/CTTInvoiceRequest/CTTInvoiceRequest',
        env.headersInvoice,
        env.cttInvoiceBody
    );
});

  it('#Step 2- Validate CTTInvoiceRequest api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})