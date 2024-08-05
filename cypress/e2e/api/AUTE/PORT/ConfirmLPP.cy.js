import { qa } from '../../../../support/factories/qa'
import { prd } from '../../../../support/factories/prd'

describe('SUAP_ConfirmLPP- ????', () => {

  it('#Step 1 - Handle ConfirmLPP api', () => {
    const env = Cypress.env('env');

    cy.SUAP_iRunApiRequest(
        env + "Site",
        "POST",
        '/dem/api/v1/licencePlates/payments/8799923121100012/confirm?channelUID=' + env.lPPBody.channelUID,
        env.headersTolls,
        ""
    );
});

  it('#Step 2- Validate ConfirmLPP api', () => {
    cy.SUAP_iValidateServerRequestError()
  })
})