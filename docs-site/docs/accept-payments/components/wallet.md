---
title: Wallet Component
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodePen from 'codepen-react'

>Learn how you can embed our prebuilt wallet component on your checkout page.

Dojo Wallet Component is a prebuilt JavaScript component for accepting payments on your checkout page. Use this integration option when you want full control over the payment flow and the look of your checkout page.
This solution is PCI compliant, you are only required to submit [Self-Assessment Questionnaire A](https://www.pcisecuritystandards.org/documents/PCI-DSS-v3_2_1-SAQ-A.pdf).

In terms of implementation, integration contains:

- Server-side: one API request to create a payment intent.

- Client-side: set up Dojo Wallet Component, which securely sends payment data to our server.

- Webhooks: server-side endpoint to receive information about the payment.

The payment flow is:

1. The customer visits the merchant's site and clicks the button Checkout.

2. The merchant client-side sends the customer's purchase information to the merchant server-side, the merchant server-side sends this information to Dojo server to [create a payment intent](#step-3-create-a-payment-intent).

3. The merchant client-side creates an instance of the [wallet component](#step-1-add-the-component-to-your-checkout-page) using the `clientSessionSecret`.

4. The wallet component collects the customer's payment details, sends them to Dojo servers, and redirects the customer to the result page.

5. The merchant server receives a [webhook notification](#step-4-handle-post-payment-events) when the payment is completed.

![](/images/flow-wallet.jpg)

:::note

If you'd rather do less coding, use prebuild [Dojo Prebuilt Checkout Page](../checkout-page/checkout-page.md).

:::

## How to process a payment

Step-by-step guide:

1. [Add the component to your checkout page](#step-1-add-the-component-to-your-checkout-page).

2. [Set up Dojo Wallet Component](#step-2-set-up-dojo-wallet-component).

3. [Create a payment intent](#step-3-create-a-payment-intent).

4. [Handle post-payment events](#step-4-handle-post-payment-events).

5. [Test and go live](#step-5-test-and-go-live).

### Before you start

import BeforeStartSnippet from '../../snippets/_before-start.mdx';

<BeforeStartSnippet />

To enable Apple Pay, you must host the [domain verification file](https://cdn.dojo.tech/payments/assets/ApplePay/apple-developer-merchantid-domain-association) on each domain you want to use, including subdomains, under the following path: `https://yourdomain/.well-known/apple-developer-merchantid-domain-association`.

Make sure that the file is downloadable and served at the correct location, as Apple will use this location to verify the validity of your domain. If your domain is protected from public access and you wish to complete domain verification, you should allow [Apple IP Addresses for Domain Verification](https://developer.apple.com/documentation/apple_pay_on_the_web/setting_up_your_server/#3179116).

#### Terms and Conditions

- By integrating Apple Pay, you adhere to the [Apple Pay APIs Acceptable Use Policy](https://developer.apple.com/apple-pay/acceptable-use-guidelines-for-websites/) and accept the terms and conditions defined in the [Apple Pay Web Merchant Terms and Conditions](https://developer.apple.com/apple-pay/terms/apple-pay-web/).

- By integrating Google Pay, you adhere to the [Google Pay APIs Acceptable Use Policy](https://payments.developers.google.com/terms/aup) and accept the terms defined in the [Google Pay API Terms of Service](https://payments.developers.google.com/terms/sellertos).

### Step 1. Add the component to your checkout page

Include Dojo `client.js` script on your checkout page. This script must always load directly from `cdn.dojo.tech` to remain PCI compliant—you can’t include it in a bundle or host a copy of it yourself.

```html reference title="index.html"
https://github.com/dojo-engineering/dojo-samples/blob/main/wallet-component/client/html/templates/index.html#L4-L8
```

Add empty placeholders div to your checkout page to create a payment form.
For example:

```html reference title="index.html"
https://github.com/dojo-engineering/dojo-samples/blob/main/wallet-component/client/html/templates/index.html#L10-L25
```

### Step 2. Set up Dojo Wallet Component

Next, in your JavaScript file, create an instance of Dojo:

```js reference title="script.js"
https://github.com/dojo-engineering/dojo-samples/blob/main/wallet-component/client/html/static/script.js#L17-L41
```

 For an unsuccessful payment, Dojo returns an error. The error event returns an object which contains details about the error:

 ```js reference title="script.js"
https://github.com/dojo-engineering/dojo-samples/blob/main/wallet-component/client/html/static/script.js#L43-L56
```

See the [Optional configuration](./configuration.md) for a complete list of parameters that you can use.

### Step 3. Create a payment intent

Call a server-side endpoint to create a payment intent, for example:

```js reference title="script.js"
https://github.com/dojo-engineering/dojo-samples/blob/main/wallet-component/client/html/static/script.js#L2-L16
```

To create a payment intent, the following parameters are required:

- `amount`. This includes the currency and value, in minor units, for example, "1000" for 10.00 GBP.

- `reference`. Your unique reference for the payment intent.

Here's an example of how to create a payment intent on your server-side:

<Tabs groupId="codeGroup">
  <TabItem value="python" label="Python">

```py reference title="server.py"
https://github.com/dojo-engineering/dojo-samples/blob/main/wallet-component/server/python/server.py#L36-L61
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference title="server.cs"
https://github.com/dojo-engineering/dojo-samples/blob/main/wallet-component/server/cs/server.cs
```
  </TabItem>
</Tabs>


See the [API reference](/api#operation/PaymentIntents_CreatePaymentIntent) for a complete list parameters that you can use.

### Step 4. Handle post-payment events

import WebhooksSnippet from '../../snippets/_webhooks.mdx';

<WebhooksSnippet />

### Step 5. Test and go live

import GoLiveSnippet from '../../snippets/_test-and-go-live.mdx';

Before going live, test your integration. <GoLiveSnippet />

#### Testing Apple Pay

To enable test cards for Apple Pay, you must have an Apple Sandbox Tester Account, then you will be able to add test cards into your Apple Wallet.

See [Apple's Sandbox Testing Documentation](https://developer.apple.com/apple-pay/sandbox-testing/) to setup your Sandbox Tester Account and check the section Test Cards for Apps and the Web to see the full list of supported test cards by Apple. Although our test payment gateway doesn't support all of them, so if you want to test successful cases, please use the cards listed in the Test Cards section.

If you aren't enrolled into the Apple Developer Program and need a tester account, please contact our support team for further instructions.

#### Testing Google Pay

The Google Pay [Test Card Suite](https://developers.google.com/pay/api/android/guides/resources/test-card-suite) allows you to test Google Pay without the need of adding real cards to Google accounts.

To instantly view these cards in your Google Account TEST environment, join [Google's User Group](https://groups.google.com/g/googlepay-test-mode-stub-data) and all test cards will be automatically added to your account so you don't need to add them manually.

---

## Next steps

import CardGrid from "@site/src/components/CardGrid"

<CardGrid home>

[![](/images/dojo-icons/AnchorSimple.svg) **Set up notification webhooks** Use webhooks to receive updates related to your payments.](../../development-resources/webhooks.md)

[![](/images/dojo-icons/Settings.svg) **Configure Dojo Components** Find out how you can configure the Dojo Components.](./configuration.md)

[![](/images/dojo-icons/Filters.svg) **Manage payments** Learn how to capture or reverse payments, retrieve payment details or change payments amount.](../../manage-payments/manage-payments.md)

</CardGrid>
