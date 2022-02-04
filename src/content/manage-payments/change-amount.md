+++
title = "Change amount"
description = ""
weight = 2
+++

{{< lead >}}Learn how to use the Dojo API to update payment.{{< /lead >}}

You can call the Dojo API to change the payment amount and tip amount after creating the payment. Before you start, make sure that payment intent could be updated. By default, when a payment intent is created, it can't be updated. If you want to be able to update the payment, include fields indicating which updates are allowed when creating the payment intent. In the following example, both the payment amount and the tip amount can be changed:

{{< code lang="bash" >}}
"config": {
    "payment": {
        "customAmountAllowed": true,
        "tipsAllowed": true
    }
}
 {{< /code >}}

You can only change an amount for payments before it has been [captured](../capture/).

## Change payment amount

To change a payment amount, use the endpoint below:

{{< code >}} POST /payment-intents/{paymentIntentId}/amount {{< /code >}}

In your request, include:

* `paymentIntentId`—identifies the payment intent to be changed.

* `amount`—the new amount to be collected by this payment intent.

For the full API specification, see the [API reference](/api-docs/#operation/PaymentIntents_SetCustomAmount).

### Request example

The next example below shows how you would change the payment amount by 10.00 GBP.

{{< code lang="bash" >}}

curl --request POST \
  --url https://api.dojo.tech/api/payment-intents/%7Bpi_pT08VyWG3EC_HQB4NBVliA%7D/amount \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A' \
  --header 'version: 2022-01-03'
  --data '{"amount":{"value":1000,"currencyCode":"GBP"}}'
 {{< /code >}}

### Response example

If your request is successful, the response will return information about the changed payment intent.

{{< code lang="json" >}}
{
  {
  "id": "pi_pT08VyWG3EC_HQB4NBVliA",
  "captureMode": "Auto",
  "connecteToken": "string",
  "connecteTokenExpirationDate": "2019-08-24T14:15:22Z",
  "status": "Created",
  "paymentMethods": [
    "Card"
  ],
  "amount": {
    "value": 1000,
    "currencyCode": "GBP"
  },
  "tipsAmount": {
    "value": 0,
    "currencyCode": "string"
  },
  "requestedAmount": {
    "value": 0,
    "currencyCode": "string"
  },
  "totalAmount": {
    "value": 0,
    "currencyCode": "string"
  },
  "reference": "string",
  "config": {
    "title": "string",
    "redirectUrl": "http://example.com",
    "cancelUrl": "http://example.com",
    "customerEmail": {
      "collectionRequired": false
    },
    "details": {
      "showTotal": true,
      "showReference": true
    },
    "billingAddress": {
      "collectionRequired": true
    },
    "shippingDetails": {
      "collectionRequired": true
    },
    "payment": {
      "customAmountAllowed": true,
      "tipsAllowed": true
    }
  }
}
{{< /code >}}

## Change tips amount

To change a tips amount, use the endpoint below:

{{< code >}} POST /payment-intents/{paymentIntentId}/tips-amount {{< /code >}}

In your request, include:

* `paymentIntentId`—identifies the payment being changed.

* `tipsAmount`—the tips amount.

For the full API specification, see the [API reference](/api-docs/#operation/PaymentIntents_SetTipsAmount).

### Request example

The next example below shows how you would change the tip's amount by 2.00 GBP.

{{< code lang="bash" >}}
curl --request POST \
  --url https://api.dojo.tech/api/payment-intents/%7Bpi_pT08VyWG3EC_HQB4NBVliA%7D/tips-amount \
  --header 'content-type: application/json' \
  --header 'idempotencyKey: 656565gfyd65' \
  --header 'Authorization: Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A' \
  --header 'version: 2022-01-03'
  --data '{"amount":{"value":200,"currencyCode":"GBP"}}'
 {{< /code >}}

### Response example

If your request is successful, the response will return information about the changed payment intent.

{{< code lang="json" >}}
{
  {
  "id": "pi_pT08VyWG3EC_HQB4NBVliA",
  "captureMode": "Auto",
  "connecteToken": "string",
  "connecteTokenExpirationDate": "2019-08-24T14:15:22Z",
  "status": "Created",
  "paymentMethods": [
    "Card"
  ],
  "amount": {
    "value": 1000,
    "currencyCode": "GBP"
  },
  "tipsAmount": {
    "value": 200,
    "currencyCode": "GBP"
  },
  "requestedAmount": {
    "value": 0,
    "currencyCode": "string"
  },
  "totalAmount": {
    "value": 0,
    "currencyCode": "string"
  },
  "reference": "string",
  "payment": {
      "customAmountAllowed": true,
      "tipsAllowed": true
    }
  }
}
 {{< /code >}}

## Change request fails

 If a request fails, the unmodified payment can still be completed. If you want to increase the payment or tips amount, you might consider alternative options:

* complete the unmodified payment and create a new to pay the additional amount

* create a new payment with the same payments details, but with a new payment amount. After the payment is authorized, cancel the original payment

## See also

* [Capture a payment](../capture/)

* [Reversal](../cancellation/reversal/)

* [Send a receipt](../send-receipt/)
