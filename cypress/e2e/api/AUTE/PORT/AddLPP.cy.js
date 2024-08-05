import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_AddLPP- ???', () => {

  it('#Step 1 - Handle AddLPP api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/dem/api/v1/licencePlates/' + env.tollsVariable.licensePlates + '/payments',
        env.headersTolls,
        env.lPPBody
    );
});

  it('#Step 2- Validate AddLPP api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})