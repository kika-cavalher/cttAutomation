import { qa } from '../../../support/factories/qa'

describe('SUAP_GetATMPayment- Describe', () => {

  it('#Step 1 - Handle GetATMPayment api', () => {
    cy.SUAP_iRunApiRequest(
      "qaSite",
      "POST",
      "/dem/api/v1/atm/payments/search",
      qa.HeadersTolls,
      "{'channelID':'Site', 'requestID':'920220718115302', 'licencePlate': '92-QM-05', 'phone': '', 'taxID':'', 'language':'PT', 'session':'', 'token':'', 'storeID':8810555, 'userID':'SITE01'}"
    )
  })

  it('#Step 2- Validate GetATMPayment api', () => {
    cy.SUAP_iValidateRequest("200")
  })
})