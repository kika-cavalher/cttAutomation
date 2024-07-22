import { qa } from '../../../support/factories/qa'

describe('SUAP_LockersByID- Describe', () => {

  it('#Step 1 - Handle LockersByID api', () => {
    cy.SUAP_iRunApiRequest(
      "qaextservice",
      "GET",
      "/api/customer-terminals?country=PT",
      //arrumar token automatico
      qa.authorization,
      ""
    )
  })

  it('#Step 2- Validate LockersByID api', () => {
    cy.SUAP_iValidateRequestWithoutStatus500()
  })
})