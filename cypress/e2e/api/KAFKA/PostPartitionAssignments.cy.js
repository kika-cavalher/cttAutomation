import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_PostConsumerInstance- ???', () => {

  it('#Step 1 - Handle PostConsumerInstance api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/kafka-proxy-api/v1/consumers/APPCTT_PRD2/instances/InstancePartition9/assignments',
        env.headersKafka,
        env.assigmentsBody
    );
});

  it('#Step 2- Validate PostConsumerInstance api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})