const axios = require('axios')

class PaymentIntent {

    // TODO: Move test data to file
    constructor(type = 'full') {
        if (type === 'full') {
            this.postData = {
                "locationId": "66666",
                "captureMode": "Auto",
                "amount": {"value": 8955, "currencyCode": "GBP"},
                "reference": "O-00001",
                "cancelUrl": "/payment",
                "redirectUrl": "",
                "config": {
                    "title": "Test Transaction",
                    "customerEmail": {"collectionRequired": true},
                    "details": {"showTotal": true},
                    "shippingDetails": {"collectionRequired": true},
                    "billingAddress": {"collectionRequired": true},
                    "payment": {
                        "customAmountAllowed": true,
                        "tipsAllowed": true
                    }
                },
                "itemLines": [{
                    "caption": "Product name version A",
                    "quantity": 1,
                    "amountTotal": {"value": 1320, "currencyCode": "GBP"}
                }, {
                    "caption": "Product name version B",
                    "quantity": 1,
                    "amountTotal": {"value": 50, "currencyCode": "GBP"}
                }, {
                    "caption": "Product name version C",
                    "quantity": 5,
                    "amountTotal": {"value": 1070, "currencyCode": "GBP"}
                }, {
                    "caption": "Product name version D",
                    "quantity": 20,
                    "amountTotal": {"value": 5023, "currencyCode": "GBP"}
                }, {
                    "caption": "Product name version 5",
                    "quantity": 23,
                    "amountTotal": {"value": 6930, "currencyCode": "GBP"}
                }],
                "taxLines": [{
                    "caption": "Subtotal",
                    "amountTotal": {"value": 7463, "currencyCode": "GBP"}
                }, {"caption": "VAT", "amountTotal": {"value": 1493, "currencyCode": "GBP"}}],
                "actionLink": {
                    "action": "DOWNLOADFILE",
                    "url": "/sample-invoice.pdf",
                    "label": "Download invoice pdf",
                    "fileName": "Invoice.pdf"
                },
                "paymentMethods": null
            }
        } else {
            this.postData = {
                "locationId": "66666",
                "captureMode": "Auto",
                "amount": {"value": 8955, "currencyCode": "GBP"},
                "reference": "O-00001",
                "cancelUrl": "/payment",
                "redirectUrl": "",
                "config": {
                    "title": "Test Transaction",
                    "customerEmail": {"collectionRequired": true},
                    "details": {"showTotal": true},
                    "shippingDetails": {"collectionRequired": false},
                    "billingAddress": {"collectionRequired": false}
                },
                "itemLines": [{
                    "caption": "Product name version A",
                    "quantity": 1,
                    "amountTotal": {"value": 1320, "currencyCode": "GBP"}
                }, {
                    "caption": "Product name version B",
                    "quantity": 1,
                    "amountTotal": {"value": 50, "currencyCode": "GBP"}
                }, {
                    "caption": "Product name version C",
                    "quantity": 5,
                    "amountTotal": {"value": 1070, "currencyCode": "GBP"}
                }, {
                    "caption": "Product name version D",
                    "quantity": 20,
                    "amountTotal": {"value": 5023, "currencyCode": "GBP"}
                }, {
                    "caption": "Product name version 5",
                    "quantity": 38,
                    "amountTotal": {"value": 2378, "currencyCode": "GBP"}
                }],
                "taxLines": [{
                    "caption": "Subtotal",
                    "amountTotal": {"value": 7463, "currencyCode": "GBP"}
                }, {"caption": "VAT", "amountTotal": {"value": 1493, "currencyCode": "GBP"}}],
                "actionLink": {
                    "action": "DOWNLOADFILE",
                    "url": "/sample-invoice.pdf",
                    "label": "Download invoice pdf",
                    "fileName": "Invoice.pdf"
                },
                "paymentMethods": null
            }
        }
    }

    post() {
        return axios.post(`http://staging-api.dojo.dev/master/payment-intents`, JSON.stringify(this.postData),
            {headers: {"Content-Type": "application/json",
                    "Service-Account-Id": "remotepayments-pod-default@firefly-dev-2018.iam.gserviceaccount.com"
                }})
            .then(res => {
                return res.data;
            })
            .catch((err) => {
                console.log(err)
                throw(`Error creating test payment intent`);
            })
    }
}

module.exports = PaymentIntent

