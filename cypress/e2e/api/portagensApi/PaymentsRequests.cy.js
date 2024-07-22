import { clientPortagem } from '../../../support/factories/headers.js'

describe('SUAP_PaymentsRequests- Describe', () => {

  it('#Step 1 - Handle PaymentsRequests api', () => {
    cy.SUAP_iRunApiRequest(
      "qaSite",
      "GET",
      "/dem/api/v1/mb/payments/requests/92-QM-05",
      clientPortagem,
      ""
    )
  })

  it('#Step 2- Validate PaymentsRequests api', () => {
    cy.SUAP_iValidateRequest("200")
  })
})