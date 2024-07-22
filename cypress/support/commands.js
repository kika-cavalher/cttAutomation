Cypress.Commands.add('SUAP_iRunApiRequest', (env, method, url, headers, body) => {
    const urls = Cypress.env('url');
    const prefix_url = urls[env.toLowerCase()];

    cy.request({
        method: method,
        url: prefix_url + url,
        headers: headers,
        body: body,
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