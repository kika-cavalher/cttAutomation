exports.prd = {

    // CALO

    headersLockersUrlencoded: {
        'Content-Type': 'application//x-www-form-urlencoded',
    },
    headersLockers: {
        'X-EpvAPI-ClientId': '',
        'X-EpvAPI-ClientKey': ''
    },
    headersLockersToken: {
        'Authorization': 'Bearer ',
    },

    bodyLockersToken: {
        'x-ibm-Client-Secret': '',
        'x-ibm-Client-ID': '',
        'grant_type': 'client_credentials',
        'audience': 'account'
    },
    lockersVariables: {
        'lockerId': '',
        'lockerEpvCode': 'BJFNSFW',
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
    },

    //PORT

    headersTolls: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-Client-ID': 'c99d1bba-3ada-4874-ac7d-c609ad19176f',
        'x-ibm-Client-Secret': 'O1dG5oF6rB6vQ5mJ6aF6gU3lL5gE0cY8uI1nA0xN1dW2cM7nC7'
    },

    tollsVariable: {
        'licensePlates': 'AO-41-TR',
        'motive': '2',
    },

    tollsPaymentBody: {
        "channelID": "Site",
        "requestID": "",
        "licencePlate": "AO-41-TR",
        "phone": "",
        "taxID": "",
        "language": "PT",
        "session": "",
        "token": "",
        "storeID": "8810555",
        "userID": "SITE01"
    },
    lPPBody: {
        "licensePlateCountryCode": "PT",
        "channel": "7",
        "channelUID": "",
        "channelLocationId": "9987999",
        "channelDescription": "MBWAY",
        "paymentMethod": "1",
        "invoiceGenerateConfirm": "true",
        "tollDetail": "false"
    },

    // TRTR/ OBJE

    headersObject: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-Client-ID': '59c9e9de-ae08-4e55-a015-5f3f25acdc80',
        'x-ibm-Client-Secret': 'V6pE6bU3gU3uN3jN5uY5sI8oY8lD7aM5kE3hP4iY6mY8pP5aY3'
    },

    objectBody: {
        "objects": [{
            "objectNumber": "DX134893849PT"
        }
        ]
    },

    // TRTR/ OBJE

    headersProduct: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-Client-ID': '',
        'x-ibm-Client-Secret': ''
    },


    // TRTR/ TRAC

    headers17Token: {
        'Content-Type': 'application/json',
        '17token': ''
    },

    trackVariables: [
        {
            "number": ""
        }
    ],
    trackDetailsBody: [
        {
            "number": "",
            "carrier": Cypress.env('CARRIER_TRACK'),
        }
    ],
    trackDetailsUpdateBody: [
        {
            "number": "{{NUMBER_TRACK}}",
            "carrier_new": 100025
        }
    ],

    UpdateTrackingDetailsBody: {
        "event": "TRACKING_UPDATED",
        "data": {
            "number": "1234567890",
            "carrier": 7041,
            "param": null,
            "tag": null,
            "track_info": {
                "shipping_info": {
                    "shipper_address": {
                        "country": "DE",
                        "state": null,
                        "city": null,
                        "street": null,
                        "postal_code": null,
                        "coordinates": {
                            "longitude": null,
                            "latitude": null
                        }
                    },
                    "recipient_address": {
                        "country": "DE",
                        "state": null,
                        "city": null,
                        "street": null,
                        "postal_code": null,
                        "coordinates": {
                            "longitude": null,
                            "latitude": null
                        }
                    }
                },
                "latest_status": {
                    "status": "Exception",
                    "sub_status": "Exception_Other",
                    "sub_status_descr": null
                },
                "latest_event": {
                    "time_iso": "2022-09-14T08:47:00+01:00",
                    "time_utc": "2022-09-14T07:47:00Z",
                    "description": "The shipment is available for pick-up from the retail outlet retail outlet Valentinskamp 88 20355 Hamburg as of now.",
                    "location": "Germany",
                    "stage": "Exception",
                    "address": {
                        "country": null,
                        "state": null,
                        "city": null,
                        "street": null,
                        "postal_code": null,
                        "coordinates": {
                            "longitude": null,
                            "latitude": null
                        }
                    }
                },
                "time_metrics": {
                    "days_after_order": 28,
                    "days_of_transit": 28,
                    "days_of_transit_done": 0,
                    "days_after_last_update": 28,
                    "estimated_delivery_date": {
                        "source": null,
                        "from": null,
                        "to": null
                    }
                },
                "milestone": [
                    {
                        "key_stage": "InfoReceived",
                        "time_iso": null,
                        "time_utc": null
                    },
                    {
                        "key_stage": "PickedUp",
                        "time_iso": null,
                        "time_utc": null
                    },
                    {
                        "key_stage": "Departure",
                        "time_iso": null,
                        "time_utc": null
                    },
                    {
                        "key_stage": "Arrival",
                        "time_iso": null,
                        "time_utc": null
                    },
                    {
                        "key_stage": "AvailableForPickup",
                        "time_iso": "2022-09-14T08:47:00+01:00",
                        "time_utc": "2022-09-14T07:47:00Z"
                    },
                    {
                        "key_stage": "OutForDelivery",
                        "time_iso": null,
                        "time_utc": null
                    },
                    {
                        "key_stage": "Delivered",
                        "time_iso": null,
                        "time_utc": null
                    },
                    {
                        "key_stage": "Returning",
                        "time_iso": null,
                        "time_utc": null
                    },
                    {
                        "key_stage": "Returned",
                        "time_iso": null,
                        "time_utc": null
                    }
                ],
                "misc_info": {
                    "risk_factor": 0,
                    "service_type": null,
                    "weight_raw": null,
                    "weight_kg": null,
                    "pieces": null,
                    "dimensions": null,
                    "customer_number": null,
                    "reference_number": null,
                    "local_number": null,
                    "local_provider": null,
                    "local_key": 0
                },
                "tracking": {
                    "providers_hash": 120912544,
                    "providers": [
                        {
                            "provider": {
                                "key": 7041,
                                "name": "DHL Paket",
                                "alias": "DHL Paket",
                                "tel": null,
                                "homepage": "https://www.dhl.de/en/privatkunden/pakete-empfangen/verfolgen.html",
                                "country": "DE"
                            },
                            "service_type": null,
                            "latest_sync_status": "Success",
                            "latest_sync_time": "2022-10-11T12:28:36Z",
                            "events_hash": 541898486,
                            "events": [
                                {
                                    "time_iso": "2022-09-14T08:47:00+01:00",
                                    "time_utc": "2022-09-14T07:47:00Z",
                                    "description": "The shipment is available for pick-up from the retail outlet retail outlet Valentinskamp 88 20355 Hamburg as of now.",
                                    "location": "Germany",
                                    "stage": "AvailableForPickup",
                                    "address": {
                                        "country": null,
                                        "state": null,
                                        "city": null,
                                        "street": null,
                                        "postal_code": null,
                                        "coordinates": {
                                            "longitude": null,
                                            "latitude": null
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        }
    },

    // WALL

    headersWallet: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-Client-ID': '74fd5a56-0960-4e10-8647-459e797378c4',
        'x-ibm-Client-Secret': 'R6eV4uS1bT1xU7yV6cN8wI8cB1iR2nS0eD1uS1bN2tF5xE3mY3'
    },

    walletVariables: {
        'appToken': '',
    },
    createWalletBody: {
        "initialBalance": 0,
        "applicationId": [
            ""
        ]
    },
    payshopWalletBody: {
        "walletId": "",
        "applicationId": ""
    },
    payshopCreatTopUp: {
        "channel": "Paypal",
        "amount": 20,
        "createdDate": "2022-05-01",
        "applicationID": "",
        "internalRef": "12345"
    },
    payshopBody: {
        "narration": "Uso cacifo",
        "amount": 0,
        "applicationID": "",
        "createdDate": "2018-05-21T04:29:43.612Z"
    },

    // COUT

    headersInvoice: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-Client-ID': '',
        'x-ibm-Client-Secret': ''
    },

    invoiceBody: {
        "customerAddress": "Rua de Santa Clara 11, 3B",
        "customerAddress2": null,
        "customerCity": "Almada",
        "customerCode": null,
        "customerCountry": null,
        "customerCountryCode": "PT",
        "customerName": "Ruth Vemba",
        "customerPostalCode": "2825-282",
        "customerPostalCodeDesignation": "COSTA DE CAPARICA",
        "customerTin": "302692843",
        "grossTotal": 1.89,
        "invoiceDate": "2022-10-28 14:15:12",
        "invoiceRequestLineDetails": [
            {
                "accountingInfo": "{\"cLucro\":\"2000035600\",\"baseProduct\":\"EMSF057.01\",\"cProveito\":\"721421105\",\"originCountry\":\"PT\",\"destinationCountry\":\"PT\"}",
                "comission": null,
                "discountAmount": 0.0,
                "discountCode": null,
                "discountPercentage": 0.0,
                "discountType": null,
                "grossAmount": 1.89,
                "isCredit": true,
                "itemCode": "EMSE095",
                "itemDescription": "Alargamento de prazo de levantamento",
                "itemSerialNumber": null,
                "itemType": "P",
                "lineGroup": null,
                "lineNumber": 0,
                "netTotalAmount": 1.54,
                "quantity": 1.0,
                "quantityMeasureUnit": null,
                "referencedCreditNoteReason": null,
                "referencedCreditNoteReference": null,
                "sku": "EMSE095",
                "taxAmount": 0.35,
                "taxArticleCode": "GG",
                "taxArticleName": "",
                "taxCode": "NOR",
                "taxComissionCode": null,
                "taxCountryRegion": "PT",
                "taxExemptionReasonCode": null,
                "taxExemptionReasonText": null,
                "taxPercentage": 23.0,
                "taxPointDate": null,
                "unitPriceBeforeDiscount": null,
                "unitPriceWithDiscount": 1.54
            }
        ],
        "invoiceRequestTaxValueDetails": [
            {
                "grossAmount": 1.89,
                "netAmount": 1.54,
                "taxAmount": 0.35,
                "taxArticleCode": "GG",
                "taxArticleName": "",
                "taxPercentage": 23.0
            }
        ],
        "invoiceTypeCode": "FR",
        "netTotal": 1.54,
        "pspBulkTransfer": "20221028",
        "pspCode": "ZSCV",
        "pspComission": 0.03402,
        "pspEntity": "990548",
        "pspExternalReference": "101700000PRD1376925",
        "pspReference": "PRD1376925",
        "taxPayable": 0.35,
        "transactionId": "c0d47575-8f44-42ed-b8b0-1233accd57bc"
    },
    cttInvoiceBody: {
        "InvoiceRequestId": ""
    },

    // DOCC

    headersDocuments: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-ibm-Client-ID': '59c9e9de-ae08-4e55-a015-5f3f25acdc80',
        'x-ibm-Client-Secret': 'V6pE6bU3gU3uN3jN5uY5sI8oY8lD7aM5kE3hP4iY6mY8pP5aY3'
    },
    documentsBody: {
        "Reference": "RH671580083PT",
        "DocumentTypeCode": "PODCTTExp",
        "ObjectIndexes": ["RH671580083PT", "", "", "", "", "EMI", ""]
    },
    searchDocumentBady: {
        "DocumentId": "106240629"
    },

    // KAFK

    headersKafka: {
        'Content-Type': 'application/vnd.kafka.v2+json',
        'x-ibm-Client-ID': 'e50d5ba7-1251-4064-82da-40ea58f7b585',
        'x-ibm-Client-Secret': 'gD5wU5iO5pQ2oF2kW8rN1hL8vU1aI0lM0sU8aX6xQ2uR5cU3vB'
    },
    consumerInstanceBody: {
        "name": "InstancePartition9",
        "format": "binary",
        "auto.offset.reset": "latest",
        "auto.commit.enable": "false",
        "fetch.min.bytes": "10000000",
        "consumer.request.timeout.ms": "60000"
    },
    assigmentsBody: {
        "partitions": [{
            "topic": "pt.prd.enr.logistics.orders-events.v1",
            "partition": "9"
        }]
    },
    positionsBody: {
        "offsets": [
            {
                "topic": "pt.prd.enr.logistics.orders-events.v1",
                "partition": "9",
                "offset": 55198862
            }
        ]
    }


}

