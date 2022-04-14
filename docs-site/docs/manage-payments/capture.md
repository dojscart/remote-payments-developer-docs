---
title: "Capture a payment"
weight: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Learn how to collect a pre-authorised payment with the Dojo API.

After a pre-authorised payment has been created, the payment isn't complete until it has been collected. When you want to collect the payment, you can capture it using the Dojo API. You can capture the full payment amount, part of the amount, or make several partial captures if their amount doesn't exceed the full payment amount.

You can only capture a payment that hasn't yet been refunded or reversed.

## Capture using the Dojo API

To capture a payment, use the endpoint below:

``` POST /payment-intents/{paymentIntentId}/captures ```

In your request, include:

* `paymentIntentId`—identifies the payment intent to be captured.

* `amount`—the amount to capture.

For the full API specification, see the [API reference](/api#operation/Captures_Create).

### Request example

The next example below shows how you would capture 10.00 GBP.

<Tabs groupId="codeGroup">
  <TabItem value="curl" label="curl" default>

```bash reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/curl/capture.sh
```

  </TabItem>
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/python/capture.py
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/cs/capture.cs
```
</TabItem>
</Tabs>

### Response example

If your request is successful, the response will return information about the capture.

```json
{
  "message": "collect payment for the order 3443",
  "captureId": "cp_itIiJMEAvES3ynYF_Yhs2g"
}
```
