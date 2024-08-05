exports.qa = {

    // CALO

    headersLockersUrlencoded: {
        'Content-Type': 'application//x-www-form-urlencoded',
    },
    headersLockers: {
        'X-EpvAPI-ClientId': '9d4d7e7b-0460-4c10-8b64-e3d24ce6bc5f',
        'X-EpvAPI-ClientKey': 'RqEJISRrJEDbCEKhWgzK0Uf0oZZCbsB6R5j0nqCkgeNsqRU3Pv'
    },

    bodyLockersToken: {
        'x-ibm-Client-Secret': 'RqEJISRrJEDbCEKhWgzK0Uf0oZZCbsB6R5j0nqCkgeNsqRU3Pv',
        'x-ibm-Client-ID': '9d4d7e7b-0460-4c10-8b64-e3d24ce6bc5f',
        'grant_type': 'client_credentials',
        'audience': 'account'
    },
    lockersVariables: {
        'lockerId': '6753',
        'lockerEpvCode': 'WOOZEA'
    },


    // ENVI   

    headersGeo: {
        'x-ibm-Client-ID': 'bd869173724b8fc867fb76ad1e9e4fea',
        'x-ibm-Client-Secret': 'ea30ea6ba296c390c29417eca8a77a0c'
    },
    headersCountrys: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-Client-ID': '3109a92a-888c-4556-98d5-4a957d66f706',
        'x-ibm-Client-Secret': 'pW0nY3cB8dP7yR1xI8kG4bV8nP3eA2sI5nS7aQ6tH2cV7lQ4nX'
    },
    headersShipping: {
        'x-ibm-client-id': 'e138529b-e00e-4b85-bd22-ce5483e4c86b',
        'x-ibm-client-secret': 'gO7rV0xG1iA1fC2dC7hP3gY8fP1tA2iE6rS7nN1cW0qR4lJ0uS',
        'bmsSourceSystemID': 'SITE002',
        'bmsSourceSystemKey': 'C60FC491-812B-42C2-A0E4-2065058E0929',
        'bmsTransactionUniqueID': '939ee38c-9386-4740-ae3e-8c2d5cc39684'
    },
    headersSimulation: {
        'x-ibm-Client-ID': '4088a84e-7170-4d44-aa17-dfb260abe469',
        'x-ibm-Client-Secret': 'wO5wT3mE3eB2rS5kQ7dP4nY1bJ5yK6pX5bD7lQ1vP2oJ5nR6qD',
        'x-iib-ExtOrigin': 'NAVE',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    headersNotification: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-Client-ID': 'e138529b-e00e-4b85-bd22-ce5483e4c86b',
        'x-ibm-Client-Secret': 'gO7rV0xG1iA1fC2dC7hP3gY8fP1tA2iE6rS7nN1cW0qR4lJ0uS',
        'bmsSourceSystemID': 'SITE002',
        'bmsSourceSystemKey': 'C60FC491-812B-42C2-A0E4-2065058E0929',
        'bmsTransactionUniqueID': '939ee38c-9386-4740-ae3e-8c2d5cc39684'
    },

    shippingVariables: {
        'registrationID': 'C9BFE740034D011EE0530A030B73127A',
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
        'DecisionID': '5705322685530112',
        'inCountry': 95.45104646,
        'inS10': 'erwa'
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
    notificationBody: {
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
    },

    // LOSE / LOJA   

    headersPointCTT: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'X-IBM-Client-Id': '954d7871-346e-4b2b-9ff8-10a8cdabf52b',
        'X-IBM-Client-Secret': 'gH3fU1wB2bE7oQ2lV6dW1xW6eT5vW3nP0sP4yT3lF1fR4sH5qW'
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
        'client-id': 'DF_DigitalTicket',
        'client-secret': '1029384756'
    },
    headersTicketPassToStore: {
        'x-ibm-client-id': '6eeefaf8-34b0-46f6-b1c9-1f0231bd14cf',
        'x-ibm-client-secret': 'aN8mF1aK3tW5sT8fO0cV0qK3nI0wJ6wQ1eG3jR6cK0aL2vP8mO'
    },
    headersTicket: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-client-id': '6eeefaf8-34b0-46f6-b1c9-1f0231bd14cf',
        'x-ibm-client-secret': 'aN8mF1aK3tW5sT8fO0cV0qK3nI0wJ6wQ1eG3jR6cK0aL2vP8mO'
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
        'x-ibm-Client-ID': '3205ece7-afca-4b14-9ed8-5ef8369ac776',
        'x-ibm-Client-Secret': 'C5xJ4qW3rA1gR6bU8eQ8eG8mU8pL3rH8iK2bI1xD1xT5mQ7xM7'
    },
    headersNewsletter: {
        'x-ibm-Client-ID': '51924585-6e30-46a0-9cae-253f1edd6b56',
        'x-ibm-Client-Secret': 'tN2tJ5pQ0jV1wR8aC8bF7eJ7vE0uR2eI2dM5bM6qY7kR5eO5tH'
    },

    billingVariables: {
        'genericInfo': [
            {
                'billingOrderID': 'c964783fdd894c14b115',
                'documentDate': '2022-04-01',
                'documentType': 'AW',
                'companyCode': 'CTTE',
                'releaseDate': '2022-04-01',
                'currency': 'EUR',
                'documentHeaderText': 'Fatura de cliente',
                'releaseKey': '01',
                'clientNumber': '300000050',
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
                'billingOrderID': 'c964783fdd894c14b115',
                'documentDate': '2022-04-01',
                'documentType': 'AW',
                'companyCode': 'CTTE',
                'releaseDate': '2022-04-01',
                'currency': 'EUR',
                'documentHeaderText': 'Fatura de cliente',
                'releaseKey': '50',
                'clientNumber': '721021109',
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
        'token': 'TGT-766-pjGA4ubBdHFfkKWtczfCse3IbNaTwGE9B0O0l1j9f5715Ycvpy-www2.ctt.pt',
        'expires': '7109'
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
        "userId": "56602CE0-DDBF-46BE-BC6B-ED012CAB223A"
    },

    //PORT

    headersTolls: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-Client-ID': '08c928e2-f208-4759-bb9e-d11befe9e3ee',
        'x-ibm-Client-Secret': 'aU1uW1rK8hU0lH6aA6mL2bB4pA7bE8fC0gG4eU5fW1gI8yG0lF'
    },

    tollsVariable: {
        'licensePlates': '92-QM-05',
        'motive': '2',
    },

    tollsPaymentBody: {
        "channelID":"Site",
        "requestID":"920220718115302",
        "licencePlate": "92-QM-05",
        "phone": "",
        "taxID":"",
        "language":"PT",
        "session":"",
        "token":"",
        "storeID":"8810555",
        "userID":"SITE01"
    },
    lPPBody: {
        "licensePlateCountryCode": "PT",
        "channel": "7",
        "channelUID": "5311010f-6056-4181-a3cc-d36a7eb1309f",
        "channelLocationId": "9987999",
        "channelDescription": "MBWAY",
        "paymentMethod": "1",
        "invoiceGenerateConfirm": "true",
        "tollDetail": "false"
      }

}   