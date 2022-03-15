---
title: "Cancel a payment"
hide: 
  - toc
weight: 3
disableReadmoreNav: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Find out how to cancel a payment that hasn't yet been authorized.

Use a cancel if you don’t want to proceed with a payment, for example because authorization is declined by the card issuer.
You can only cancel a payment before it has already been authorized. Payments that have yet been authorized have to be [reversed](reversal/) instead.

## Cancel using the Dojo API

To cancel a payment to your customer, use the endpoint below:

``` DELETE /payment-intents/{paymentIntentId} ```

In your request, include:

* `paymentIntentId`—identifies the payment being canceled.

For the full API specification, see the [API reference](/api#operation/PaymentIntents_Delete).

### Request example

The next example below shows how you would cancel a payment intent.

<Tabs groupId="codeGroup">
  <TabItem value="curl" label="curl" default>

```bash reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/curl/cancel.sh
```

  </TabItem>
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/python/cancel.py
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/cs/cancel.cs
```

  </TabItem>
</Tabs>

### Response example

If your request is successful, the response will return information about the canceled payment.

```json
{
  "id": "pi_pT08VyWG3EC_HQB4NBVliA",
  "status": "Canceled",
  ...
}
```

---

## See also

* [Change amount](../change-amount/)

* [Reversal](reversal/)
