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

//LOSE / SENH

headersDigitalTicket: {
    'client-id': '',
    'client-secret': ''
},
headersTicketPassToStore: {
    'x-ibm-client-id': '',
    'x-ibm-client-secret': ''
},
headersTicket: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'x-ibm-client-id': '',
    'x-ibm-client-secret': ''
},

TicketPassToStoreVariables: {
    'Latitude': '38.722413',
},
notificationVariables: {
    'number': 0,
    'request_id': 'string',
    'store_id': 'string'
},

//PEUS

headersProfile: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'x-ibm-Client-ID': '',
    'x-ibm-Client-Secret': ''
},
headersNewsletter: {
    'x-ibm-Client-ID': '',
    'x-ibm-Client-Secret': ''
},

billingVariables: {
    'genericInfo': [
        {
            'billingOrderID': '',
            'documentDate': '2024-08-01',
            'documentType': 'AW',
            'companyCode': 'CTTE',
            'releaseDate': '2022-04-01',
            'currency': 'EUR',
            'documentHeaderText': 'Fatura de cliente',
            'releaseKey': '01',
            'clientNumber': '',
            'amount': '5',
            'profitCenter': '35600',
            'vatCode': '01',
            'clientItemText': 'Cacifos CTT - Morada Virtual',
            'occasionalClientName': 'Diogo Mendes',
            'occasionalClientAddress': 'Rua Mario Cesariny 1 2',
            'occasionalClientPostalCode': '1600-123',
            'occasionalClientLocality': 'PORTO',
            'clientTFN': '999999990'
        },
        {
            'billingOrderID': '',
            'documentDate': '2022-04-01',
            'documentType': 'AW',
            'companyCode': 'CTTE',
            'releaseDate': '2022-04-01',
            'currency': 'EUR',
            'documentHeaderText': 'Fatura de cliente',
            'releaseKey': '50',
            'clientNumber': '',
            'amount': '5',
            'profitCenter': '35600',
            'vatCode': '01',
            'clientItemText': 'Cacifos CTT - Morada Virtual',
            'occasionalClientName': 'Diogo Mendes',
            'occasionalClientAddress': 'Rua Mario Cesariny 1 2',
            'occasionalClientPostalCode': '1600-123',
            'occasionalClientLocality': 'PORTO',
            'clientTFN': '999999990'
        }
    ]
},
smsVariables: {
    "recipient": "913752161",
    "notification": false,
    "sender": "CTT",
    "message": "Olá teste",
    "priority": 2,
    "allowUnicode": true,
    "isFlashSMS": true,
    "externalMessageID": "1",
    "externalSubmissionID": "1",
    "externalCCID": "1"
},
passwordVariables: {
    "password": "a password antiga",
    "newPassword": "a nova password",
    "confirmPassword": "a nova password"
},
profileVariables: {
    // colocar o Token em variavel. 
    'token': '',
    'expires': ''
},
newsletterVariables: {
    "newsletters": [
        {
            "agreementLang01": "I wish to subscribe the Institutional Information CTT newsletter.",
            "agreementLangDef": "Desejo receber a newsletter de Informação Institucional dos CTT.",
            "descriptionLang01": "Institutional Information (news, info about the company, etc.)",
            "descriptionLangDef": "Informação Institucional (notícias, informações diversas sobre a empresa, etc)",
            "id": {
                "newsletterCode": "nl2",
                "shopCode": "CTT"
            },
            "position": 1,
            "subscribed": true
        },
        {
            "agreementLang01": "I wish to subscribe the Campaigns and news CTT newsletter.",
            "agreementLangDef": "Desejo receber a newsletter Campanhas e Novidades dos CTT.",
            "descriptionLang01": "Campaigns and news (discounts / promotions, new product launches)",
            "descriptionLangDef": "Campanhas e novidades (descontos/ promoções, lançamentos de novos produtos)",
            "id": {
                "newsletterCode": "nl1",
                "shopCode": "CTT"
            },
            "position": 2,
            "subscribed": true
        },
        {
            "agreementLang01": "I wish to subscribe the Online Shop newsletter in accordance with my choosen areas of interest.",
            "agreementLangDef": "Desejo receber a newsletter da Loja Online de acordo com as áreas de interesse selecionadas por mim.",
            "descriptionLang01": "Online Shop Newsletter",
            "descriptionLangDef": "Newsletter Loja Online",
            "id": {
                "newsletterCode": "nl1",
                "shopCode": "LOJV"
            },
            "position": 3,
            "subscribed": true,
            "newsletterThemeGroups": {
                "id": {
                    "newsletterCode": "nl1",
                    "shopCode": "LOJV",
                    "themeGroupCode": "AREAS_INTERESSE"
                },
                "newsletterThemes": [
                    {
                        "descriptionLang01": "Postal Products",
                        "descriptionLangDef": "Produtos Postais",
                        "id": {
                            "newsletterCode": "nl1",
                            "shopCode": "LOJV",
                            "themeCode": "CL",
                            "themeGroupCode": "AREAS_INTERESSE"
                        },
                        "labelLang01": "Postal Products",
                        "labelLangDef": "Produtos Postais",
                        "position": 1,
                        "type": 1,
                        "subscribed": true
                    },
                    {
                        "descriptionLang01": "Telecommunications",
                        "descriptionLangDef": "Telecomunicações",
                        "id": {
                            "newsletterCode": "nl1",
                            "shopCode": "LOJV",
                            "themeCode": "TL",
                            "themeGroupCode": "AREAS_INTERESSE"
                        },
                        "labelLang01": "Telecommunications",
                        "labelLangDef": "Telecomunicações",
                        "position": 3,
                        "type": 1,
                        "subscribed": true
                    },
                    {
                        "descriptionLang01": "Products for children",
                        "descriptionLangDef": "Produtos para crianças",
                        "id": {
                            "newsletterCode": "nl1",
                            "shopCode": "LOJV",
                            "themeCode": "CR",
                            "themeGroupCode": "AREAS_INTERESSE"
                        },
                        "labelLang01": "Products for children",
                        "labelLangDef": "Produtos para crianças",
                        "position": 4,
                        "type": 1,
                        "subscribed": true
                    },
                    {
                        "descriptionLang01": "Products home/office",
                        "descriptionLangDef": "Produtos casa/escritório",
                        "id": {
                            "newsletterCode": "nl1",
                            "shopCode": "LOJV",
                            "themeCode": "HB",
                            "themeGroupCode": "AREAS_INTERESSE"
                        },
                        "labelLang01": "Products home/office",
                        "labelLangDef": "Produtos casa/escritório",
                        "position": 5,
                        "type": 1,
                        "subscribed": true
                    },
                    {
                        "descriptionLang01": "Others",
                        "descriptionLangDef": "Outros Quais",
                        "id": {
                            "newsletterCode": "nl1",
                            "shopCode": "LOJV",
                            "themeCode": "OTHER",
                            "themeGroupCode": "AREAS_INTERESSE"
                        },
                        "labelLang01": "Others",
                        "labelLangDef": "Outros Quais",
                        "position": 6,
                        "type": 2,
                        "subscribed": true,
                        "themeComment": "Teste"
                    }
                ],
                "position": 1,
                "titleLang01": "Products of interest ?",
                "titleLangDef": "Produtos de interesse ?",
                "type": "AT_LEAST_ONE"
            }
        },
        {
            "agreementLang01": "I wish to subscribe the Collecting CTT newsletter.",
            "agreementLangDef": "Desejo receber a newsletter de Colecionismo dos CTT.",
            "descriptionLang01": "Collecting (philatelic books, and product information meuselo Hoarding)",
            "descriptionLangDef": "Colecionismo (livros filatélicos, meuselo e informação sobre produtos de colecionismo)",
            "id": {
                "newsletterCode": "nl3",
                "shopCode": "CTT"
            },
            "position": 4,
            "subscribed": true
        },
        {
            "agreementLang01": "I wish to subscribe the Online Ticket Shop newsletter in accordance with my choosen areas of interest.",
            "agreementLangDef": "Desejo receber a newsletter da Bilheteira Online.",
            "descriptionLang01": "Online Ticket Shop Newsletter",
            "descriptionLangDef": "Bilheteira Online",
            "id": {
                "newsletterCode": "nl1",
                "shopCode": "BLHT"
            },
            "position": 5,
            "subscribed": true
        },
        {
            "agreementLang01": "I wish to subscribe the Tolls CTT newsletter.",
            "agreementLangDef": "Desejo receber a newsletter de Portagens dos CTT.",
            "descriptionLang01": "Tolls",
            "descriptionLangDef": "Portagens",
            "id": {
                "newsletterCode": "nl1",
                "shopCode": "PME"
            },
            "position": 6,
            "subscribed": true
        }
    ],
    "userId": ""
}

}

