import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_Geographicalinfors- Returns the information contained in the postal code such as addresses and locations.', () => {

  it('#Step 1 - Handle Geographicalinfors api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        "/geographicalinfors/api/v1/geopostalcode/" + env.shippingVariables.postalCode,
        env.headersGeo,
        ""
    );
});

  it('#Step 2- Validate Geographicalinfors api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})