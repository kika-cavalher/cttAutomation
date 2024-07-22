Cypress.Commands.add('SUAP_iRunApiRequest', (env, method, url, headers, body) => {
    const urls = Cypress.env('url');
    const prefix_url = urls[env.toLowerCase()];

    cy.request({
        method: method,
        url: prefix_url + url,
        headers: headers,
        body: body,
        failOnStatusCode: false
    })

        .then((res) => {
            Cypress.env('apiResponse', res)
        });
})

Cypress.Commands.add('SUAP_iValidateRequest', (respose_status_value) => {
    const response = Cypress.env('apiResponse')
    cy.log(response)
    expect(response.status).to.eq(parseInt(respose_status_value))
})

Cypress.Commands.add('SUAP_iValidateRequestWithoutStatus500', () => {
    const response = Cypress.env('apiResponse')
    cy.log(response)
    const statusCode = response.status

    expect(statusCode).to.not.be.within(500, 599)
})

Cypress.Commands.add('iChangeBodyFormat', (bodyForChange) => {
    const body = bodyForChange;
    const formBody = Object.keys(body)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(body[key])}`)
        .join('&');

    return formBody;

})
