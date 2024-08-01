import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_PipelinePointsHistory- ?', () => {

  it('#Step 1 - Handle PipelinePointsHistory api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        "/bms/shipping/api/v1/pipeline/points/history?parcelCode=" + env.shippingBody.parcelCode + "&registrationID=" + env.shippingVariables.registrationID,
        env.headersShipping,
        ""
    );
});

  it('#Step 2- Validate PipelinePointsHistory api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})