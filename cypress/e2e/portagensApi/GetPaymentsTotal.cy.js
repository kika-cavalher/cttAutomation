import { clientPortagem } from '../../support/factories/headers.js'

describe('SUAP_GetPaymentsTotal- Describe', () => {

  it('#Step 1 - Handle GetPaymentsTotal api', () => {
    cy.SUAP_iRunApiRequest(
      "qaSite",
      "GET",
      "/dem/api/v1/payments/total?entity=a&storeID=1&licencePlates=92-QM-05&offset=0&perPage=10",
      clientPortagem,
      ""
    )
  })

  it('#Step 2- Validate GetPaymentsTotal api', () => {
    cy.SUAP_iValidateRequest("200")
  })
})