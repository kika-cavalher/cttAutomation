import { qa } from '../../../support/factories/qa'

describe('SUAP_GetUserDetailsEPVCode- Describe', () => {

  it('#Step 1 - Handle GetUserDetailsEPVCode api', () => {
    cy.SUAP_iRunApiRequest(
        "qaserver",
        "GET",
        "/DF_Customer_API/rest/EpvAPI/GetUserDetails?EpvCode=WOOZEA&pageSize=20&pageNumber=1",
        {'X-EpvAPI-ClientId' : '9d4d7e7b-0460-4c10-8b64-e3d24ce6bc5f' , 'X-EpvAPI-ClientKey' : 'RqEJISRrJEDbCEKhWgzK0Uf0oZZCbsB6R5j0nqCkgeNsqRU3Pv'},
        ""
    );
});

  it('#Step 2- Validate GetUserDetailsEPVCode api', () => {
    cy.SUAP_iValidateRequestWithoutStatus500()
  })
})