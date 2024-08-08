describe('SUAP_Notification- ?', () => {

  it('#Step 1 - Handle Notification api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "POST",
      "/bms/notification/api/v1/parcel/notification",
      factories.headersNotification,
      factories.notificationBody
    ).then((response) => {
      if (response && response.status === 200) {
        Cypress.env('NOTIFICATION_ID', response.notificationResponseData.notificationID);
      }
    });
  });

  it('#Step 2- Validate Notification api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})