describe('SUAP_Geographicalinfors- Returns the information contained in the postal code such as addresses and locations.', () => {

  it('#Step 1 - Handle Geographicalinfors api', () => {
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
        "GET",
        "/geographicalinfors/api/v1/geopostalcode/" + factories.shippingVariables.postalCode,
        factories.headersGeo,
        ""
    );
});

  it('#Step 2- Validate Geographicalinfors api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})