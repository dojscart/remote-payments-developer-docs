---
title: Getting started
sidebar_position: 1
id: Getting started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CardGrid from "@site/src/components/CardGrid"

>Generate API keys and make a first API call.

:::info Not a developer?

Check out our [no-code solutions](No-code%20solutions).

:::

## Step 1. Get your API keys

To submit payments, you'll be making API requests that are authenticated with an API key. To generate your API keys, send a request to our [support team](https://support.dojo.tech/hc/en-gb/requests/new).

Copy and securely store the API key in your system—you won't be able to restore it later.
If your API key is lost or compromised, you need to ask for a new one.

## Step 2. Make a test API call

To verify that your key is working correctly, let's create a test API call.
Copy the code below into a command line, replace `YOUR_API_KEY_HERE` with your test API key (with the prefix `sk_test_`), and run the command.

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

```cs reference
https://github.com/dojo-engineering/dojo-samples/blob/main/getting-started/cs/create-payment-intent.cs
```

  </TabItem>
</Tabs>

If your account is set up correctly, you receive a response: `200 OK`.

---

## Next steps

You're now ready to start building your payment integration. You can integrate with our API in several ways, for a detailed integration guide, select an option below:

<CardGrid home>

[![](/images/dojo-icons/ShoppingBag.svg) **Dojo Online Checkout** A pre-built payment page for accepting payments on your website.](/Accept%20payments/Online%20checkout/Online%20checkout.md)

[![](/images/dojo-icons/Link.svg) **Payment links** Links that you send to your customer and accept payments without a website.](Accept%20payments/Payment%20links/)

[![](/images/dojo-icons/Layout.svg) **Dojo Components** Our ready-made JavaScript components that you can combine with your own components.](Accept%20payments/Components/)

[![](/images/dojo-icons/Code.svg) **API only** A solution for creating your own UI and having full control over your payment page.](Accept%20payments/api-only/)

</CardGrid>