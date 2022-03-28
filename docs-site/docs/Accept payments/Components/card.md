---
title: Card Component
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodePen from 'codepen-react'

>Learn how you can embed pre-built Dojo Card Component on your checkout page.

Dojo Card Component is a pre-built JavaScript component for accepting payments on your checkout page. Use this integration option when you want full control over the payment flow and the look of your online checkout page.
This solution is PCI compliant, you are only required to submit [Self-Assessment Questionnaire A](https://www.pcisecuritystandards.org/documents/PCI-DSS-v3_2_1-SAQ-A.pdf).

In terms of implementation, integration contains:

- Server-side: one API request to create a payment intent.

- Client-side: set up Dojo card component, which securely sends payment data to our server.

- Webhook server: receives information about the payment.

If you'd rather do less coding, use pre-build [Dojo Online Checkout](../Online%20checkout/).

## How to process a payment

Step-by-step guide:

1. [Add the component to your checkout page](#step-1-add-the-component-to-your-checkout-page).

2. [Set up Dojo Card Component](#step-2-set-up-dojo-card-component).

3. [Create a payment intent](#step-3-create-a-payment-intent).

4. [Handle post-payment events](#step-4-handle-post-payment-events)

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

See the [Optional configuration](configuration) for a complete list of parameters that you can use.

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

Use webhooks to receive information about the payment. We send a `payment_intent.status_updated` event when the payment is completed.

If you haven't set up webhooks yet, review our [webhooks guide](../../Development%20resources/webhooks.md).

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

[![](/images/dojo-icons/AnchorSimple.svg) **Set up notification webhooks** Use webhooks to receive updates related to your payments.](../../Development%20resources/webhooks.md)

[![](/images/dojo-icons/Settings.svg) **Configure Dojo Components** Find out how you can configure the Dojo Components.](configuration)

[![](/images/dojo-icons/Filters.svg) **Manage payments** Learn how to capture or reverse payments, retrieve payment details or change payments amount.](../../Manage%20payments)

</CardGrid>
