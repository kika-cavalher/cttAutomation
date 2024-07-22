import { clientPortagem } from '../../../support/factories/headers.js'

describe('SUAP_GenerateSMSToken- Describe', () => {

  it('#Step 1 - Handle GenerateSMSToken api', () => {
    cy.SUAP_iRunApiRequest(
      "qaSite",
      "POST",
      "/dem/api/v1/atm/payments/search",
      clientPortagem,
      "{'channelID':'Site', 'phone': '913752161', 'language': 'pt', 'storeID': '8810555', 'userID': 'SITE01'}"
    )
  })

  it('#Step 2- Validate GenerateSMSToken api', () => {
    cy.SUAP_iValidateRequest("200")
  })
})