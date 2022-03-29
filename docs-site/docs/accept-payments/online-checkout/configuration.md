---
title: "Optional configurations"
weight: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Learn how to activate additional features for your online checkout page.

You can activate additional features like address collection. Explore a few examples below, or see the API reference for the full list of configurable fields.

- [Add payment methods](#add-payment-methods)

    Integrate Apple Pay and Google Pay wallets in addition to card payments.

- [Collect billing address, shipping details, and customer email](#collect-billing-address-shipping-details-and-customer-email)

    Use your online checkout page to capture useful information about your customer.

- [Redirect to your success page](#redirect-to-your-success-page)

    Show your success page to customers.

- [Show detailed information about the order and taxes](#show-detailed-information-about-the-order-and-taxes)

    Set up the information that you want to show to customers.

## Add payment methods

![](/images/add-payment-methods.png)

By default, the online checkout page supports only card payments. To enable Apple Pay and Google Pay wallets pass `"Card","Wallet"` in `paymentMethods`, for example:

<Tabs groupId="codeGroup">
  <TabItem value="curl" label="curl" default>

```bash reference
https://github.com/dojo-engineering/dojo-samples/blob/main/configuration/curl/add-payment-methods.sh
```

  </TabItem>
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/configuration/python/add-payment-methods.py
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference
https://github.com/dojo-engineering/dojo-samples/blob/main/configuration/cs/add-payment-methods.cs
```

  </TabItem>
</Tabs>

Additionally, you need to verify your domain for Apple Pay.

## Collect billing address, shipping details, and customer email

![](/images/billing-and-shipping-details.png)

You can add a form to collect billing address, shipping details, and customer email to the online checkout page.
To do it pass `collectionRequired: true` in `config.billingAddress`, `config.shippingDetails`, and `config.customerEmail`, for example:

<Tabs groupId="codeGroup">
  <TabItem value="curl" label="curl" default>

```bash reference
https://github.com/dojo-engineering/dojo-samples/blob/main/configuration/curl/billing-and-shipping-details.sh
```

  </TabItem>
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/configuration/python/billing-and-shipping-details.py
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference
https://github.com/dojo-engineering/dojo-samples/blob/main/configuration/cs/billing-and-shipping-details.cs
```

  </TabItem>
</Tabs>

## Redirect to your success page

After your customer fills payment information on the checkout page, Dojo processes the payment and redirects the customer to the success page. You can redirect the customer to another page after the payment. To do it pass the url in `config.redirectUrl`, for example:

<Tabs groupId="codeGroup">
  <TabItem value="curl" label="curl" default>

```bash reference
https://github.com/dojo-engineering/dojo-samples/blob/main/configuration/curl/redirect-success-page.sh
```

  </TabItem>
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/configuration/python/redirect-success-page.py
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference
https://github.com/dojo-engineering/dojo-samples/blob/main/configuration/cs/redirect-success-page.cs
```

  </TabItem>
</Tabs>

## Show detailed information about the order and taxes

![](/images/show-detailed-information.png)

You can add information about each position in the order to the online checkout page, to do it, pass this data to `itemLines`. In addition, you can add information about all taxes or fees that are included to the order, use `taxLines` for this. The item and tax amounts don't affect the payment intent amount.

To add total due to the online checkout page, pass `showTotal: true` in `config.details`. This value will be the same as the payment intent amount.

<Tabs groupId="codeGroup">
  <TabItem value="curl" label="curl" default>

```bash reference
https://github.com/dojo-engineering/dojo-samples/blob/main/configuration/curl/show-information.sh
```

  </TabItem>
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/configuration/python/show-information.py
```

  </TabItem>
  <TabItem value="C#" label="C#">

```csharp reference
https://github.com/dojo-engineering/dojo-samples/blob/main/configuration/cs/show-information.cs
```

  </TabItem>
</Tabs>

---
## More information

import CardGrid from "@site/src/components/CardGrid"

<CardGrid home>

[![](/images/dojo-icons/TerminalWindow.svg) **API Reference** See the API reference for a complete list of parameters you use.](/api)

</CardGrid>
