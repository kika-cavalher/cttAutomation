Cypress.Commands.add('SUAP_iRunApiRequest', (env, endpointKey, method, url, headers, body) => {
    const baseUrls = Cypress.config('baseUrls');
    const endpoint = baseUrls[env.toLowerCase()][endpointKey];

    cy.request({
        method: method,
        url: `${endpoint}${url}`,
        headers: headers,
        body: body,
        failOnStatusCode: false
    })
    .then((res) => {
        Cypress.env('apiResponse', res);
        cy.log(`Status code: ${res.status}`)
    });
});

Cypress.Commands.add('SUAP_iValidateRequest', (response_status_value) => {
    const response = Cypress.env('apiResponse')
    cy.log(response)
    expect(response.status).to.eq(parseInt(response_status_value))
});

Cypress.Commands.add('SUAP_iValidateServerRequestError', () => {
    const response = Cypress.env('apiResponse')
    const statusCode = response.status

    expect(statusCode).to.not.be.within(407, 599)
});

Cypress.Commands.add('iHandleAEnvairmentOfVariable', (variable) => {
    const env = Cypress.env('environment').toLowerCase();
    const defaultToken = Cypress.env('variables')[env]['variable'];
    
    Cypress.env(variable, defaultToken);
  });