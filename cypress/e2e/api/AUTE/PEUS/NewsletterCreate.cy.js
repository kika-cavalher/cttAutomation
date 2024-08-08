describe('SUAP_NewsletterCreate- ?', () => {

  it('#Step 1 - Handle NewsletterCreate api', () => {
    const env = Cypress.env('environment').toLowerCase();

    let factories;
    if (env === 'qa') {
      factories = require('../../../../support/factories/qa').qa;
    } else if (env === 'prd') {
      factories = require('../../../../support/factories/prd').prd;
    }

    cy.SUAP_iRunApiRequest(
      env,
      "site",
      "POST",
      '/newsletterrs/newsletter/info',
      factories.headersNewsletter,
      factories.newsletterVariables
    );
});

  it('#Step 2- Validate NewsletterCreate api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})