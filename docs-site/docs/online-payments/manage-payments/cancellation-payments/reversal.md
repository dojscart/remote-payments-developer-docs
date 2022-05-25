---
title: "Reverse a payment"
weight: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Learn how to reverse a payment with the Dojo API.

Use a reversal if you need to cancel a payment, for example if a customer has requested a payment to be canceled. You can reverse the full payment amount only.

 Reversals can only be actioned on the same calendar day as the original payment. You can only reverse a payment:

* in case `captureMode:Manual`—when it's in one of these statuses: `Created` or `Authorized`. Payments are in the status `Captured` have to be [refunded](refund.md) instead

* in case `captureMode:Auto`—when it's in the status `Captured`

If you want to use the Dojo App for a reversal, see [Reversing online checkout transactions](https://support.dojo.tech/hc/en-gb/articles/4408826217106-Refunding-and-reversing-online-checkout-transactions#h_01FK1T29A54JCYNZ9ZE4HK3G7T).

## Reverse using the Dojo API

To reverse a payment, use the endpoint below:

``` POST /payment-intents/{paymentIntentId}/reversal ```

In your request, include:

* `paymentIntentId`—identifies the payment being reverse.

For the full API specification, see the [API reference](/api#operation/Reversal_Create).

### Request example

The next example below shows how you would reverse the payment intent `pi_pT08VyWG3EC_HQB4NBVliA`.

<Tabs groupId="codeGroup">
  <TabItem value="curl" label="curl" default>

```bash reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/curl/reversal.sh
```

  </TabItem>
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/python/reversal.py
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/cs/reversal.cs
```

  </TabItem>
</Tabs>

### Response example

If your request is successful, the response will return information about the reversal.

```json
{
  "message": "reverse for the order 3443",
  "reversalId": "rvs_g8mCx87TykeQ6BOXqxZ9NQ"
}
```

## Cancel a reverse

Once created, the reverse can't be canceled. As an option, you can create a new payment intent instead of the one that was reversed.