---
title: "Payments methods"
hide: 
  - toc
weight: 4
disableReadmoreNav: true
---

## Cards

## Wallets

Digital wallets allow your customers to securely make payments using any card they have saved in their wallet, or the stored funds in their wallet account.

Supported wallets:

* Apple Pay

* Google Pay

## Supported payment methods for each integration type

Additional efforts to implement a new payment method depend on your type of integration.

{{< table style="table-hover" >}}

| Type of integration | What you need to do|
|-----|-----|
|[Online checkout](../accept-payments/online-checkout) | No additional efforts. The online checkout page automatically renders supported payment methods.|
|[Payment links](../accept-payments/payment-links) | No additional efforts. The hosted payment form automatically renders supported payment methods.|
|[Plugins](../no-code/) | |
|[API only](../accept-payments/api-only/) | Use the `paymentMethods` parameter and build your own UI for the payment method.|

{{< /table >}}
