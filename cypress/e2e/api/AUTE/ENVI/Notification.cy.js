import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_Notification- ?', () => {

  it('#Step 1 - Handle Notification api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        "/bms/notification/api/v1/parcel/notification",
        env.headersNotification,
        env.notificationBody
    );
    const response = Cypress.env('apiResponse')
    Cypress.env('NOTIFICATION_ID', response.notificationResponseData.notificationID)
});

  it('#Step 2- Validate Notification api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})