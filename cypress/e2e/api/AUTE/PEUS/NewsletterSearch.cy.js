describe('SUAP_NewsletterSearch- ?', () => {

  it('#Step 1 - Handle NewsletterSearch api', () => {
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
      '/newsletterrs/newsletter/info/search',
      factories.headersNewsletter,
      factories.newsletterVariables.userId
    );
});

  it('#Step 2- Validate NewsletterSearch api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})