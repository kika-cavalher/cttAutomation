describe('SUAP_ShipmentModifications- ?', () => {

  it('#Step 1 - Handle ShipmentModifications api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        "/bms/shipping/api/v1/shipment/modifications",
        env.headersShipping,
        env.shippingBody
    );
});

  it('#Step 2- Validate ShipmentModifications api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})