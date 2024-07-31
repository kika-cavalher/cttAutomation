exports.qa = {
    
// CALO

    headersLockersUrlencoded : {
        'Content-Type': 'application//x-www-form-urlencoded',
    },
    headersLockers : {
        'X-EpvAPI-ClientId': '9d4d7e7b-0460-4c10-8b64-e3d24ce6bc5f',
        'X-EpvAPI-ClientKey': 'RqEJISRrJEDbCEKhWgzK0Uf0oZZCbsB6R5j0nqCkgeNsqRU3Pv'
    },
    bodyLockersToken : {
        'x-ibm-Client-Secret': 'RqEJISRrJEDbCEKhWgzK0Uf0oZZCbsB6R5j0nqCkgeNsqRU3Pv',
        'x-ibm-Client-ID': '9d4d7e7b-0460-4c10-8b64-e3d24ce6bc5f',
        'grant_type': 'client_credentials',
        'audience': 'account'
    },   
    lockersVariables : {
        'lockerId': '6753',
        'lockerEpvCode': 'WOOZEA'
    },    
    
    
// ENVI   
    
    headersShipping : {
        'x-ibm-client-id': 'e138529b-e00e-4b85-bd22-ce5483e4c86b',
        'x-ibm-client-secret': 'gO7rV0xG1iA1fC2dC7hP3gY8fP1tA2iE6rS7nN1cW0qR4lJ0uS',
        'bmsSourceSystemID': 'SITE002',
        'bmsSourceSystemKey': 'C60FC491-812B-42C2-A0E4-2065058E0929',
        'bmsTransactionUniqueID': '939ee38c-9386-4740-ae3e-8c2d5cc39684'
    },   
    shippingVariables : {
        'registrationID': 'C9BFE740034D011EE0530A030B73127A'
    },
    shippingNational : {
        'productCode': 'EMSF056.01',
        'subProductCode': 'PIP16',
        'originCountry': 'PT',
        'destinationCountry': 'PT',
        'originPostalCode': '2615-114',
        'destinationPostalCode': '1999-001'
    },
    shippingBody : {
        'channelCode': '03',
        'requestingActor': '0',
        'parcelCode': 'DA128362458PT',
        'shipmentModification': [
            {
                "sapCode": Cypress.env('SAP_CODE')
            }
        ]
    },


}   