---
title: Getting started
sidebar_position: 2
id: getting-started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CardGrid from "@site/src/components/CardGrid"

>Generate API keys and make a first API call.

:::info Not a developer?

Check out our [plugins](/plugins/plugins.md).

:::

## Step 1. Create a developer account

Get started by creating a [free developer account](https://portal.dojo.tech/login).

## Step 2. Generate your API keys

To submit payments, you'll be making API requests that are authenticated with an API key. To generate your API keys, go to **Developer portal** --> **API keys** and select **+Create new key**.

<img src="/images/api-keys.png" alt="drawing" width="1000"/>

Copy and securely store the API key in your system—you won't be able to restore it later.
If your API key is lost or compromised, you need to ask for a new one.

## Step 3. Make a test API call

To verify that your key is working correctly, let's create a test API call.
Copy the code below, replace the API key with your test API key (with the prefix `sk_sandbox_`), and run the code.

<Tabs groupId="codeGroup">
  <TabItem value="curl" label="curl" default>

```bash reference
https://github.com/dojo-engineering/dojo-samples/blob/main/getting-started/curl/create-payment-intent.sh
```

  </TabItem>
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/getting-started/python/create-payment-intent.py#L4-L20
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference
https://github.com/dojo-engineering/dojo-samples/blob/main/getting-started/cs/create-payment-intent.cs
```

  </TabItem>
</Tabs>

If your account is set up correctly, you receive a response: `200 OK`.

## Step 4. Check the result

After receiving the request, Dojo creates a payment intent and returns its unique id:

```json
{
    "id": "pi_sandbox_RBMHTJ4fIkmSppDILZVCGw",
    ...
}
```

Use this `id` to create a link in the following format:

`https://pay.dojo.tech/checkout/{id}`

Follow the link to see the result.

---

## Next steps

You're now ready to start building your payment integration. You can integrate with our API in several ways, for a detailed integration guide, select an option below:

<CardGrid home>

[![](/images/dojo-icons/ShoppingBag.svg) **Checkout Page** A prebuilt payment page for accepting payments on your website.](/accept-payments/checkout-page/checkout-page.md)

[![](/images/dojo-icons/Link.svg) **Payment Links** Links that you send to your customer and accept payments without a website.](/accept-payments/payment-links/payment-links.md)

[![](/images/dojo-icons/Layout.svg) **Components** Our ready-made JavaScript components that you can combine with your own components.](/accept-payments/components/components.md)

[![](/images/dojo-icons/Code.svg) **API only** A solution for creating your own UI and having full control over your payment page.](/accept-payments/api-only.md)

</CardGrid>
