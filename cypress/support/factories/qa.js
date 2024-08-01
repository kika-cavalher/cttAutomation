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
    
    headersGeo : {
        'x-ibm-Client-ID': 'bd869173724b8fc867fb76ad1e9e4fea',
        'x-ibm-Client-Secret': 'ea30ea6ba296c390c29417eca8a77a0c'
    }, 
    headersCountrys : {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-Client-ID': '3109a92a-888c-4556-98d5-4a957d66f706',
        'x-ibm-Client-Secret': 'pW0nY3cB8dP7yR1xI8kG4bV8nP3eA2sI5nS7aQ6tH2cV7lQ4nX'
    }, 
    headersShipping : {
        'x-ibm-client-id': 'e138529b-e00e-4b85-bd22-ce5483e4c86b',
        'x-ibm-client-secret': 'gO7rV0xG1iA1fC2dC7hP3gY8fP1tA2iE6rS7nN1cW0qR4lJ0uS',
        'bmsSourceSystemID': 'SITE002',
        'bmsSourceSystemKey': 'C60FC491-812B-42C2-A0E4-2065058E0929',
        'bmsTransactionUniqueID': '939ee38c-9386-4740-ae3e-8c2d5cc39684'
    },  
    headersSimulation : {
        'x-ibm-Client-ID': '4088a84e-7170-4d44-aa17-dfb260abe469',
        'x-ibm-Client-Secret': 'wO5wT3mE3eB2rS5kQ7dP4nY1bJ5yK6pX5bD7lQ1vP2oJ5nR6qD',
        'x-iib-ExtOrigin': 'NAVE',
        'Content-Type': 'application/json; charset=UTF-8'
    }, 
    headersNotification : {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-Client-ID': 'e138529b-e00e-4b85-bd22-ce5483e4c86b',
        'x-ibm-Client-Secret': 'gO7rV0xG1iA1fC2dC7hP3gY8fP1tA2iE6rS7nN1cW0qR4lJ0uS',
        'bmsSourceSystemID': 'SITE002',
        'bmsSourceSystemKey': 'C60FC491-812B-42C2-A0E4-2065058E0929',
        'bmsTransactionUniqueID': '939ee38c-9386-4740-ae3e-8c2d5cc39684'
    }, 

    shippingVariables : {
        'registrationID': 'C9BFE740034D011EE0530A030B73127A',
        'postalCode': '4400101',
        'TipoPontos': 'EC'
    },
    shippingNational : {
        'productCode': 'EMSF056.01',
        'subProductCode': 'PIP16',
        'originCountry': 'PT',
        'destinationCountry': 'PT',
        'originPostalCode': '2615-114',
        'destinationPostalCode': '1999-001'
    },
    countriesBody: {
        "DecisionID":"5705322685530112",
        "inCountry":95.45104646,
        "inS10":"erwa"
    },
    shippingBody : {
        'channelCode': '03',
        'requestingActor': '0',
        'parcelCode': 'DA128362458PT',
        'shipmentModification': [
            {
                'sapCode': Cypress.env('SAP_CODE')
            }
        ]
    },
    simulationBody : {
        'businessPartnerID': '11654570',
        'masterAgreementID': '300229001',
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
    notificationBody : {
        'parcelNotificationData': {
          'notificationType': 'T_PARCEL_PIP_02',
          'parcelID': 'DA128362458PT',
          'customsParams': {
            'EMAIL_SUBJECT': 'CTT Expresso Alteracao da sua Encomenda  DA949537430PT nao efetuada',
            'OBJECT_NUMBER': 'DA128362458PT',
            'RECIPIENT_EMAIL': 'erica.cavalher@nextengineering.pt',
            'OBJECT_SEARCH_URL': 'https://www.ctt.pt/feapl_2/app/open/cttexpresso/objectSearch/objectSearch.jspx?objects=DA128362458PT'
          },
          'customsParamsFormat': 'JSON'
        }
    }

}   