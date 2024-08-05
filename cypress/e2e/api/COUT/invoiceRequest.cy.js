import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_invoiceRequest- ???', () => {

  it('#Step 1 - Handle invoiceRequest api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/cttinvoice/api/v1/scecf/invoiceRequest',
        env.headersInvoice,
        env.invoiceBody
    );
});

  it('#Step 2- Validate invoiceRequest api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})