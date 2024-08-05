import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_PostConsumerInstance- ???', () => {

  it('#Step 1 - Handle PostConsumerInstance api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/kafka-proxy-api/v1/consumers/APPCTT_PRD2',
        env.headersKafka,
        env.consumerInstanceBody
    );
});

  it('#Step 2- Validate PostConsumerInstance api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})