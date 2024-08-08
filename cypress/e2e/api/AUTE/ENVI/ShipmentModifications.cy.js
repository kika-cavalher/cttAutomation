describe('SUAP_ShipmentModifications- ?', () => {

  it('#Step 1 - Handle ShipmentModifications api', () => {
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
      "/bms/shipping/api/v1/shipment/modifications",
      factories.headersShipping,
      factories.shippingBody
    );
});

  it('#Step 2- Validate ShipmentModifications api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})