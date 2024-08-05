import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_GetRecord- ???', () => {

  it('#Step 1 - Handle GetRecord api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "GET",
        '/kafka-proxy-api/v1/consumers/APPCTT_PRD2/instances/InstancePartition9/records?timeout=60000&max_bytes=2480000',
        env.headersKafka,
        ""
    );
});

  it('#Step 2- Validate GetRecord api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})