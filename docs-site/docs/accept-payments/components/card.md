---
title: Card Component
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodePen from 'codepen-react'

>Learn how you can embed prebuilt Dojo Card Component on your checkout page.

Dojo Card Component is a prebuilt JavaScript component for accepting payments on your checkout page. Use this integration option when you want full control over the payment flow and the look of your checkout page.
This solution is PCI compliant, you are only required to submit [Self-Assessment Questionnaire A](https://www.pcisecuritystandards.org/documents/PCI-DSS-v3_2_1-SAQ-A.pdf).

In terms of implementation, integration contains:

- Server-side: one API request to create a payment intent.

- Client-side: set up Dojo Card Component, which securely sends payment data to our server.

- Webhooks: server-side endpoint to receive information about the payment.

The payment flow is:

1. The customer visits the merchant's site and clicks the button Checkout.

2. The merchant client-side sends the customer's purchase information to the merchant server-side, the merchant server-side sends this information to Dojo server to [create a payment intent](#step-3-create-a-payment-intent).

3. The merchant client-side creates an instance of the [card component](#step-1-add-the-component-to-your-checkout-page) using the `clientSessionSecret`.

4. The customer enters payment details directly on the merchant checkout page to the card component.

5. The card component collects the customer's payment details, sends them to Dojo servers, and redirects the customer to the result page.

6. The merchant server receives a [webhook notification](#step-4-handle-post-payment-events) when the payment is completed.

![](/images/flow-card.jpg)

:::note

If you'd rather do less coding, use prebuild [Dojo Prebuilt Checkout Page](../checkout-page/checkout-page.md).

:::
## How to process a payment

Step-by-step guide:

1. [Add the component to your checkout page](#step-1-add-the-component-to-your-checkout-page).

2. [Set up Dojo Card Component](#step-2-set-up-dojo-card-component).

3. [Create a payment intent](#step-3-create-a-payment-intent).

4. [Handle post-payment events](#step-4-handle-post-payment-events).

5. [Test and go live](#step-5-test-and-go-live).

### Before you start

import BeforeStartSnippet from '../../snippets/_before-start.mdx';

<BeforeStartSnippet />

### Step 1. Add the component to your checkout page

Include Dojo `client.js` script on your checkout page. This script must always load directly from `cdn.dojo.tech` to remain PCI compliant—you can’t include it in a bundle or host a copy of it yourself.

```html reference title="index.html"
https://github.com/dojo-engineering/dojo-samples/blob/main/card-component/client/html/templates/index.html#L4-L8
```

Add empty placeholders div to your checkout page to create a payment form.
For example:

```html reference title="index.html"
https://github.com/dojo-engineering/dojo-samples/blob/main/card-component/client/html/templates/index.html#L9-L24
```

### Step 2. Set up Dojo card component

Next, in your JavaScript file, create an instance of Dojo:

```js reference title="script.js"
https://github.com/dojo-engineering/dojo-samples/blob/main/card-component/client/html/static/script.js#L17-L59
```

 For an unsuccessful payment, Dojo returns an error. The error event returns an object which contains details about the error:

```js reference title="script.js"
https://github.com/dojo-engineering/dojo-samples/blob/main/card-component/client/html/static/script.js#L61-L75
```

See the [Optional configuration](./configuration.md) for a complete list of parameters that you can use.

### Step 3. Create a payment intent

Call a server-side endpoint to create a payment intent, for example:

```js reference title="script.js"
https://github.com/dojo-engineering/dojo-samples/blob/main/card-component/client/html/static/script.js#L2-L16
```

To create a payment intent, the following parameters are required:

- `amount`. This includes the currency and value, in minor units, for example, "1000" for 10.00 GBP.

- `reference`. Your unique reference for the payment intent.

Here's an example of how to create a payment intent on your server-side:

<Tabs groupId="codeGroup">
  <TabItem value="python" label="Python">

```py reference title="server.py"
https://github.com/dojo-engineering/dojo-samples/blob/main/card-component/server/python/server.py#L36-L61
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference title="server.cs"
https://github.com/dojo-engineering/dojo-samples/blob/main/card-component/server/cs/server.cs
```

  </TabItem>
</Tabs>

See the [API reference](/api#operation/PaymentIntents_CreatePaymentIntent) for a complete list parameters that you can use.

### Step 4. Handle post-payment events

import WebhooksSnippet from '../../snippets/_webhooks.mdx';

<WebhooksSnippet />

### Step 5. Test and go live

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

[![](/images/dojo-icons/Settings.svg) **Configure Dojo Components** Find out how you can configure the Dojo Components.](./configuration.md)

[![](/images/dojo-icons/Filters.svg) **Manage payments** Learn how to capture or reverse payments, retrieve payment details or change payments amount.](../../manage-payments/manage-payments.md)

</CardGrid>
