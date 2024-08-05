import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_DeleteConsumerInstance- ???', () => {

  it('#Step 1 - Handle DeleteConsumerInstance api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "DELETE",
        '/kafka-proxy-api/v1/consumers/APPCTT_PRD2/instances/InstancePartition1',
        env.headersKafka,
        ""
    );
});

  it('#Step 2- Validate DeleteConsumerInstance api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})