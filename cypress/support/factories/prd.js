exports.prd = {

    // CALO

    headersLockersUrlencoded: {
        'Content-Type': 'application//x-www-form-urlencoded',
    },
    headersLockers: {
        'X-EpvAPI-ClientId': '',
        'X-EpvAPI-ClientKey': ''
    },
    bodyLockersToken: {
        'x-ibm-Client-Secret': '',
        'x-ibm-Client-ID': '',
        'grant_type': 'client_credentials',
        'audience': 'account'
    },
    lockersVariables: {
        'lockerId': '',
        'lockerEpvCode': 'BJFNSFW'
    },


    // ENVI   

    headersGeo: {
        'x-ibm-Client-ID': '',
        'x-ibm-Client-Secret': ''
    },
    headersCountrys: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-Client-ID': '',
        'x-ibm-Client-Secret': ''
    },
    headersShipping: {
        'x-ibm-client-id': 'b',
        'x-ibm-client-secret': '',
        'bmsSourceSystemID': 'SITE002',
        'bmsSourceSystemKey': '',
        'bmsTransactionUniqueID': ''
    },
    headersSimulation: {
        'x-ibm-Client-ID': '6b38b8a0-bae0-4ecd-b0da-8dccf06da904',
        'x-ibm-Client-Secret': 'yJ6sS2nK1iA0dS7lO3sG6fM0mF4qN6sU1nT3qQ1uH3sN1kF1uO',
        'x-iib-ExtOrigin': 'NAVE',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    headersNotification: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-Client-ID': '',
        'x-ibm-Client-Secret': '',
        'bmsSourceSystemID': 'SITE002',
        'bmsSourceSystemKey': '',
        'bmsTransactionUniqueID': ''
    },

    shippingVariables: {
        'registrationID': '',
        'postalCode': '4400101',
        'TipoPontos': 'EC'
    },
    shippingNational: {
        'productCode': 'EMSF056.01',
        'subProductCode': 'PIP16',
        'originCountry': 'PT',
        'destinationCountry': 'PT',
        'originPostalCode': '2615-114',
        'destinationPostalCode': '1999-001'
    },
    countriesBody: {
        "DecisionID": "",
        "inCountry": 95.45104646,
        "inS10": "erwa"
    },
    shippingBody: {
        'channelCode': '03',
        'requestingActor': '0',
        'parcelCode': 'DA128362458PT',
        'shipmentModification': [
            {
                'sapCode': Cypress.env('SAP_CODE')
            }
        ]
    },
    simulationBody: {
        'businessPartnerID': '',
        'masterAgreementID': '',
        'createSimulationDate': '20221025182155',
        'simulationDate': '20221025182155',
        'eventsInformation': [
            {
                'productID': 'EMSF001.02',
                'quantity': '1',
                'unitMeasure': 'UN',
                'pricesAttribute': [
                    {
                        'priceAttributeID': 'ZZ_CODDEST',
                        'priceAttributeValue': '2'
                    },
                    {
                        'priceAttributeID': 'ZZ_CODREM',
                        'priceAttributeValue': '1999'
                    },
                    {
                        'priceAttributeID': 'ZZ_COMREM',
                        'priceAttributeValue': '0'
                    },
                    {
                        'priceAttributeID': 'ZZ_PAISDEST',
                        'priceAttributeValue': 'FR'
                    },
                    {
                        'priceAttributeID': 'ZZ_PAISREM',
                        'priceAttributeValue': 'PT'
                    },
                    {
                        'priceAttributeID': 'ZZ_PESO_REAL',
                        'priceAttributeValue': '1'
                    }
                ]
            }
        ]
    },
    notificationBody: {
        'parcelNotificationData': {
            'notificationType': 'T_PARCEL_PIP_02',
            'parcelID': '',
            'customsParams': {
                'EMAIL_SUBJECT': 'CTT Expresso Alteracao da sua Encomenda  DA949537430PT nao efetuada',
                'OBJECT_NUMBER': '',
                'RECIPIENT_EMAIL': 'erica.cavalher@nextengineering.pt',
                'OBJECT_SEARCH_URL': ''
            },
            'customsParamsFormat': 'JSON'
        }
    },

    // LOSE / LOJA   

    headersPointCTT: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'X-IBM-Client-Id': 'ba564297-df7f-4651-b076-a3391194ff24',
        'X-IBM-Client-Secret': 'dK0dN6yT6rF2cF8mP5tU7yM0iQ2aJ7wL2gV7hD8tM6sU2kH2vL'
    },
    storeVariables: {
        'Latitude': '38.722413',
        'Longitude': '-9.192700',
        'Radius': '5',
        'TipoPontos': 'EC',
        'CodCategoria': Cypress.env('STORE_CATEGORY_ID'),
        'CodOrgPonto': Cypress.env('STORE_ID'),
    },

}

