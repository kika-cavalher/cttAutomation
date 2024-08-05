import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_NewsletterCreate- ?', () => {

  it('#Step 1 - Handle NewsletterCreate api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/newsletterrs/newsletter/info',
        env.headersNewsletter,
        env.newsletterVariables
    );
});

  it('#Step 2- Validate NewsletterCreate api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})