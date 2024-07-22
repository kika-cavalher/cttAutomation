import { qa } from '../../../support/factories/qa'

describe('SUAP_LockersToken- Describe', () => {

  it('#Step 1 - Handle LockersToken api', () => {
    cy.iChangeBodyFormat(qa.token).then((formBody) => {
      cy.SUAP_iRunApiRequest(
          "qaSite",
          "POST",
          "/dem/api/v1/atm/payments/search",
          qa.HeadersLocker,
          formBody
      );
  });
});

  it('#Step 2- Validate LockersToken api', () => {
    cy.SUAP_iValidateRequestWithoutStatus500()
  })
})

// Salvar variavel TOKEN_LOCKER