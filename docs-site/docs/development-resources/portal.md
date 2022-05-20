---
title: Developer Portal
id: portal
---

> Find out more about Developer Portal and how you can use it.

The developer portal contains a set of tools that developers can use to manage their integrations with Dojo APIs, including API keys and webhooks.

**[Login to developer account→](https://developer.dojo.tech/login)**

To get started using Dojo Developer Portal you need to have a Dojo account. If you haven't got an account yet, [sign up now](https://account.dojo.tech/register?redirectLink=https:%2F%2Faccount.dojo.tech%2Flogin).

## Sandbox and production environments

There are two environments for you to choose on Developer Portal:

* **Test mode**—sandbox environment that allows you to safely test integrations before using them in production. In this mode you don’t modify your live data. Use this mode when you develop your integration

* **Live mode**—production environment that gives you access to the real data.
Use this mode when you’re ready to launch your integration

To switch between these modes use the toggle in the left menu.

![](/images/test-mode.png)

## Account structure

With Dojo, you have a single company account, and one or more sub-accounts called location accounts.

* Company account—represents your business entity with us, holds all your location accounts.

* Location accounts—represents your unique business item, like shop, cafe, or another point of sale.

Each location account has a total of two keys: secret key pair for [sandbox and production environments](#sandbox-and-production-environments). You can find your keys in the Developer Portal. Learn how to [manage your API keys](api-keys.md).

To view data related to a specific location account, select the drop-down menu in the top left and choose a location account.

![](/images/account-menu.png)

---

## Learn more

import CardGrid from "@site/src/components/CardGrid"

<CardGrid home>

[![](/images/dojo-icons/AnchorSimple.svg) **Set up notification webhooks** Use webhooks to receive updates related to your payments.](webhooks.md)

[![](/images/dojo-icons/Key.svg) **Generate API keys** Learn how to manage your API keys.](api-keys.md)

</CardGrid>