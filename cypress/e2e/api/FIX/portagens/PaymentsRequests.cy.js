import { qa } from '../../../support/factories/qa'

describe('SUAP_PaymentsRequests- Describe', () => {

  it('#Step 1 - Handle PaymentsRequests api', () => {
    cy.SUAP_iRunApiRequest(
      "qaSite",
      "GET",
      "/dem/api/v1/mb/payments/requests/92-QM-05",
      qa.HeadersTolls,
      ""
    )
  })

  it('#Step 2- Validate PaymentsRequests api', () => {
    cy.SUAP_iValidateRequest("200")
  })
})