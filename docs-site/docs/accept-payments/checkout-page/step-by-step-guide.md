---
title: "Step-by-step guide"
weight: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Learn how to implement our Checkout Page to accept payments.

In terms of implementation, integration contains:

- Server-side: one API request to create a payment intent.

- Client-side: redirect to Checkout Page.

- Webhooks: server-side endpoint to receive information about the payment.

The payment flow is:

1. The customer visits the merchant's site and clicks the button Checkout.

2. The merchant client-side sends the customer's purchases information to the merchant server-side, the merchant server-side sends this information to Dojo server to [create a payment intent](#step-1-create-a-payment-intent).

3. The merchant client-side [redirect the customer](#step-2-redirect-your-customer-to-dojo-checkout-page) to Prebuilt Checkout Page that's hosted on our side.

4. Prebuilt Checkout Page collects the customer's payment details, sends them to Dojo servers, and redirects the customer to the result page.

5. The merchant server receives a [webhook notification](#step-3-handle-post-payment-events) when the payment is completed.

![](/images/flow-checkout-page.jpg)

## How to process a payment

Step-by-step guide:

1. [Create a payment intent](#step-1-create-a-payment-intent).

2. [Redirect your customer to Dojo Checkout Page](#step-2-redirect-your-customer-to-dojo-checkout-page).

3. [Handle post-payment events](#step-3-handle-post-payment-events).

4. [Test and go live](#step-4-test-and-go-live).

### Before you start

import BeforeStartSnippet from '../../snippets/_before-start.mdx';

<BeforeStartSnippet />

### Step 1. Create a payment intent

Call a server-side endpoint from the checkout button on your client-side to create a payment intent, for example:

```js reference title="online-checkout-client.html"
https://github.com/dojo-engineering/dojo-samples/blob/main/online-checkout/client/html/templates/online-checkout-client.html#L10-L27
```

To create a payment intent, the following parameters are required:

- `amount`. This includes the currency and value, in minor units, for example, "1000" for 10.00 GBP.

- `reference`. Your unique reference for the payment intent.

Here's an example of how to create a payment intent for 10 GBP on your server-side:

<Tabs groupId="codeGroup">
  <TabItem value="python" label="Python">

```py reference title="server.py"
https://github.com/dojo-engineering/dojo-samples/blob/main/online-checkout/server/python/server.py#L9-L42
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference title="server.cs"
https://github.com/dojo-engineering/dojo-samples/blob/main/online-checkout/server/cs/server.cs#L16-L50
```

  </TabItem>
</Tabs>

See the [API reference](/api#operation/PaymentIntents_CreatePaymentIntent) for a complete list of parameters that can be used for payment intent creation.

### Step 2. Redirect your customer to Dojo Checkout Page

After receiving the request, Dojo creates a payment intent and returns its unique id:

```json
{
    "id": "pi_CggWPWfehUWgVNnDdsdLMQ",
    ...
}
```

Return this id to the client-side and use it to create a link in the following format:

`https://pay.dojo.tech/checkout/{{id}}`

Redirect your customer to the link on your client-side:

```js reference title="online-checkout-client.html"
https://github.com/dojo-engineering/dojo-samples/blob/main/online-checkout/client/html/templates/online-checkout-client.html#L28-L32
```

After your customer fills payment information on the checkout page, Dojo processes the payment and redirects the customer to the success page.

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

[![](/images/dojo-icons/Settings.svg) **Configure Checkout Page** Find out how to add another payment method or shipping address form to the page.](configuration.md)

[![](/images/dojo-icons/Filters.svg) **Manage payments** Learn how to capture or reverse payments, retrieve payment details or change payments amount.](../../manage-payments/manage-payments.md)

</CardGrid>