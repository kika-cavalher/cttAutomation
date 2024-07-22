import { qa } from '../../../support/factories/qa'

describe('SUAP_Lockers- Describe', () => {

  it('#Step 1 - Handle Lockers api', () => {
    cy.SUAP_iRunApiRequest(
      "qaextservice",
      "GET",
      "/customer-terminals/6753'",
      //arrumar token automatico
      qa.authorization,
      ""
    )
  })

  it('#Step 2- Validate Lockers api', () => {
    cy.SUAP_iValidateRequestWithoutStatus500()
  })
})