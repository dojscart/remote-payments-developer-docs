---
title: "Refund a payment"
weight: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Find out how to refund a payment using the Dojo API.

Use a refund if you need to return money to your customer, for example if they returned a purchase, you need to refund the payment. You can refund the full payment amount, part of the amount, or make several partial refunds if their amount doesn't exceed the full payment amount.

You can only refund a payment after it has already been [captured](../capture.md). Payments that haven't yet been captured have to be [reversed](reversal.md) instead.

If you want to use the Dojo Merchant app for a refund, see [Refunding online checkout transactions](https://support.dojo.tech/hc/en-gb/articles/4408826217106-Refunding-and-reversing-online-checkout-transactions#h_01FK1SZJWY37BZKNMN0BQ3EYKF).

## Refund using the Dojo API

To return a payment to your customer, use the endpoint below:

``` POST /payment-intents/{paymentIntentId}/refunds ```

In your request, include:

* `paymentIntentId`—identifies the payment being refunded.

* `amount`—the refund amount.

* `idempotencyKey`—header parameter to recognize subsequent retries of the same request. Must be unique for each new refund for the payment intent.

For the full API specification, see the [API reference](/api#operation/Refunds_Create).

### Request example

The next example below shows how you would refund 10.00 GBP.

<Tabs groupId="codeGroup">
  <TabItem value="curl" label="curl" default>

```bash reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/curl/refund.sh
```

  </TabItem>
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/python/refund.py
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/cs/refund.cs
```

  </TabItem>
</Tabs>

### Response example

If your request is successful, the response will return information about the refund.

```json
{
  "message": "refund for the order 3443",
  "refundId": "rfnd_g8mCx87TykeQ6BOXqxZ9NQ"
}
```

## Cancel a refund

Once created, the refund can't be canceled. As an option, you can create a new payment intent instead of the one that was refunded.