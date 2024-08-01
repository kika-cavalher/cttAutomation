import { qa } from '../../../support/factories/qa'

describe('SUAP_GetPaymentList- Describe', () => {

  it('#Step 1 - Handle GetPaymentList api', () => {
    cy.SUAP_iRunApiRequest(
      "qaSite",
      "GET",
      "/dem/api/v1/payments/list/92-QM-05?ptIndicator=true&channelID=Site",
      qa.HeadersTolls,
      ""
    )
  })

  it('#Step 2- Validate GetPaymentList api', () => {
    cy.SUAP_iValidateRequest("200")
  })
})