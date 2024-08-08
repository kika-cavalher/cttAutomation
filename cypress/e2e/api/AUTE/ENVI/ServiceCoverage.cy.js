describe('SUAP_ServiceCoverage- ?', () => {
  const env = Cypress.env('environment').toLowerCase();

  let factories;
  if (env === 'qa') {
    factories = require('../../../../support/factories/qa').qa;
  } else if (env === 'prd') {
    factories = require('../../../../support/factories/prd').prd;
  }

  it('#Step 1 - Handle ServiceCoverage api', () => {
    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "GET",
      "/bms/shipping/api/v1/service/coverage?productCode=" + factories.shippingNational.productCode + "&subProductCode=" + factories.shippingNational.subProductCode + "&originCountry=" + factories.shippingNational.originCountry + "&destinationCountry="+ factories.shippingNational.destinationCountry + "&originPostalCode=" + factories.shippingNational.originPostalCode + "&destinationPostalCode=" + factories.shippingNational.destinationPostalCode ,
      factories.headersShipping,
      ""
    ).then((response) => {
      if (response && response.status === 200) {
        Cypress.env('SAP_CODE', response.serviceCoverageOutputData.serviceCoverage[0].sapCode);
      }
    });
  });

  it('#Step 2- Validate ServiceCoverage api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})