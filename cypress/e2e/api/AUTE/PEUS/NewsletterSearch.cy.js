import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_NewsletterSearch- ?', () => {

  it('#Step 1 - Handle NewsletterSearch api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/newsletterrs/newsletter/info/search',
        env.headersNewsletter,
        '{' + env.newsletterVariables.userId + '}'
    );
});

  it('#Step 2- Validate NewsletterSearch api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})