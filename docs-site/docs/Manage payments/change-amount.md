---
title: "Change amount"
weight: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Learn how to use the Dojo API to update payment.

You can call the Dojo API to change the payment amount and tip amount after creating the payment. Before you start, make sure that payment intent could be updated. By default, when a payment intent is created, it can't be updated. If you want to be able to update the payment, include fields indicating which updates are allowed when creating the payment intent. In the following example, both the payment amount and the tip amount can be changed:

```
"config": {
    "payment": {
        "customAmountAllowed": true,
        "tipsAllowed": true
    }
}
```

You can only change an amount for payments before it has been [captured](capture/).

## Change payment amount

To change a payment amount, use the endpoint below:

``` POST /payment-intents/{paymentIntentId}/amount ```

In your request, include:

* `paymentIntentId`—identifies the payment intent to be changed.

* `amount`—the new amount to be collected by this payment intent.

For the full API specification, see the [API reference](/api#operation/PaymentIntents_SetCustomAmount).

### Request example

The next example below shows how you would change the payment amount by 10.00 GBP.

<Tabs groupId="codeGroup">
  <TabItem value="curl" label="curl" default>

```bash reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/curl/change-amount.sh
```

  </TabItem>
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/python/change-amount.py
```

  </TabItem>
  <TabItem value="C#" label="C#">

```cs reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/cs/change-amount.cs
```

  </TabItem>
</Tabs>

### Response example

If your request is successful, the response will return information about the changed payment intent.

```
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
```

## Change tips amount

To change a tips amount, use the endpoint below:

``` POST /payment-intents/{paymentIntentId}/tips-amount ```

In your request, include:

* `paymentIntentId`—identifies the payment being changed.

* `tipsAmount`—the tips amount.

For the full API specification, see the [API reference](/api#operation/PaymentIntents_SetTipsAmount).

### Request example

The next example below shows how you would change the tip's amount by 2.00 GBP.

<Tabs groupId="codeGroup">
  <TabItem value="curl" label="curl" default>

```bash reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/curl/change-tips-amount.sh
```

  </TabItem>
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/python/change-tips-amount.py
```

  </TabItem>
  <TabItem value="C#" label="C#">

```cs reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/cs/change-tips-amount.cs
```

  </TabItem>
</Tabs>

### Response example

If your request is successful, the response will return information about the changed payment intent.

```
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
```

## Change request fails

 If a request fails, the unmodified payment can still be completed. If you want to increase the payment or tips amount, you might consider alternative options:

* complete the unmodified payment and create a new to pay the additional amount

* create a new payment with the same payments details, but with a new payment amount. After the payment is authorized, cancel the original payment

---

## See also

* [Capture a payment](capture/)

* [Reversal](Cancellation%20payments/reversal/)

* [Send a receipt](send-receipt/)
