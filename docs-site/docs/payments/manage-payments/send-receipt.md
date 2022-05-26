---
title: "Send a receipt"
weight: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Learn how to email receipts with the Dojo API.

Dojo automatically sends email receipts after a successful payment. This is done by providing an email address when making the API request, using the email address of a Customer object:

```json
"customer": {
    "emailAddress": "client@gmail.com",
    "phoneNumber": "078654321"
}
```

Each payment has a receipt history where you can view in the Dojo App.

## Send additional emails

You can manually send additional receipts to customers, to do this use the endpoint below:

``` POST /payment-intents/{paymentIntentId}/receipt```

In your request, include:

* `emails`—the list of email addresses to which the receipt should be sent.

For the full API specification, see the [API reference](/api#operation/Receipt_Create).

### Request example

The next example below shows how you would capture 10.00 GBP.

<Tabs groupId="codeGroup">
  <TabItem value="curl" label="curl" default>

```bash reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/curl/send-receipt.sh
```

  </TabItem>
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/python/send-receipt.py
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference
https://github.com/dojo-engineering/dojo-samples/blob/main/manage-payments/cs/send-receipt.cs
```

  </TabItem>
</Tabs>

### Response example

If your request is successful, the response will return an empty object.
