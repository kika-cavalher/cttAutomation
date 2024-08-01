import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_ServiceCoverage- ?', () => {

  it('#Step 1 - Handle ServiceCoverage api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        "/bms/shipping/api/v1/service/coverage?productCode=" + env.shippingNational.productCode + "&subProductCode=" + env.shippingNational.subProductCode + "&originCountry=" + env.shippingNational.originCountry + "&destinationCountry="+ env.shippingNational.destinationCountry + "&originPostalCode=" + env.shippingNational.originPostalCode + "&destinationPostalCode=" + env.shippingNational.destinationPostalCode ,
        env.headersShipping,
        ""
    );
    const response = Cypress.env('apiResponse')
    Cypress.env('SAP_CODE', response.serviceCoverageOutputData.serviceCoverage[0].sapCode)
});

  it('#Step 2- Validate ServiceCoverage api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})