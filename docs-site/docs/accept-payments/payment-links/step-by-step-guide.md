---
title: "Step-by-step guide"
weight: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Learn how to generate payment links automatically through the API.

In terms of implementation, integration contains:

- Server-side: one API request to create a payment intent.

- Webhooks: server-side endpoint to receive information about the payment.

## How to process a payment

Step-by-step guide:

1. [Create a payment link](#step-1-create-a-payment-link).

2. [Send the payment link to your customer](#step-2-send-the-payment-link-to-your-customer).

3. [Handle post-payment events](#step-3-handle-post-payment-events).

4. [Test and go live](#step-4-test-and-go-live).

### Before you start

import BeforeStartSnippet from '../../snippets/_before-start.mdx';

<BeforeStartSnippet />

### Step 1. Create a payment link

To create a payment link call a server-side endpoint to create a payment intent, the following parameters are required:

- `amount`. This includes the currency and value, in minor units, for example, "1000" for 10.00 GBP.

- `reference`. Your unique reference for the payment intent.

- `paymentSource: "payment-links"`. Information regarding the payment source type. Without this parameter, you will not be able to filter the transaction by type.

Here's an example of how to create a payment intent for 10 GBP on your server-side:

<Tabs groupId="codeGroup">
  <TabItem value="python" label="Python">

```py reference title="server.py"
https://github.com/dojo-engineering/dojo-samples/blob/main/payment-links/server/python/server.py#L7-L39
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference title="server.cs"
https://github.com/dojo-engineering/dojo-samples/blob/main/payment-links/server/cs/server.cs
```

  </TabItem>
</Tabs>

See the [API reference](/api#operation/PaymentIntents_CreatePaymentIntent) for a complete list of parameters that can be used for payment intent creation.

### Step 2. Send the payment link to your customer

After receiving the request, Dojo creates a payment intent and returns its unique id:

```json
{
    "id": "pi_CggWPWfehUWgVNnDdsdLMQ",
    ...
}
```

Return this id to the client-side and use it to create a link in the following format:

`https://pay.dojo.tech/checkout/{{id}}`

Send the link to your customer through chat or email. When the customer opens the link, they'll redirect to the Dojo online checkout page. After the customer fills payment information on the checkout page, Dojo processes the payment and redirects the customer to the success page.

### Step 3. Handle post-payment events

import WebhooksSnippet from '../../snippets/_webhooks.mdx';

<WebhooksSnippet />

### Step 4. Test and go live

Before going live, test your integration using the test card numbers:

import CardSnippet from '../../snippets/_card.mdx';

<CardSnippet />

import GoLiveSnippet from '../../snippets/_test-and-go-live.mdx';

<GoLiveSnippet />

---

## Next steps

import CardGrid from "@site/src/components/CardGrid"

<CardGrid home>

[![](/images/dojo-icons/AnchorSimple.svg) **Set up notification webhooks** Use webhooks to receive updates related to your payments.](../../development-resources/webhooks.md)

[![](/images/dojo-icons/Settings.svg) **Configure Dojo Online Checkout page** Find out how to add another payment method or shipping address form to the page.](../online-checkout/configuration.md)

[![](/images/dojo-icons/Filters.svg) **Manage payments** Learn how to capture or reverse payments, retrieve payment details or change payments amount.](../../manage-payments/manage-payments.md)

</CardGrid>
