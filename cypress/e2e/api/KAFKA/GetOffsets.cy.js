import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetOffsets- ???', () => {

  it('#Step 1 - Handle GetOffsets api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        '/kafka-proxy-api/v1/topics/pt.prd.enr.logistics.orders-events.v1/partitions/1/offsets',
        env.headersKafka,
        ""
    );
});

  it('#Step 2- Validate GetOffsets api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})