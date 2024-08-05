import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_PostOffsetPositions- ???', () => {

  it('#Step 1 - Handle PostOffsetPositions api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/kafka-proxy-api/v1/consumers/APPCTT_PRD2/instances/InstancePartition9/positions',
        env.headersKafka,
        env.positionsBody
    );
});

  it('#Step 2- Validate PostOffsetPositions api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})