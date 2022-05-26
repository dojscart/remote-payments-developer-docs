---
title: Payment links
weight: 2
id: payment-links
---

>Learn about Dojo Payment Links.

Dojo Payment Link is a link you can send to your customer, and it will take them to a Dojo Prebuilt Checkout Page for them to complete the payment. The payment page works across different devices and can be customized. With the payment links, you can sell online without a website. You could send the payment links after interacting with your customer through chat or email, or any other channel.

You can create payment links either in the Dojo App, or using the Dojo API. To create payment links in the Dojo app, you don't need development, but you need to manually create a link every time you have a new order. When using the API, you can automate this process, but you will need a developer.

Payment links don't expire, but each link can only be used to make one successful payment. After a customer makes a successful payment, anyone accessing the same link will see a message "Payment successful".

This solution is PCI compliant, you are required to submit [Self-Assessment Questionnaire A](https://www.pcisecuritystandards.org/documents/PCI-DSS-v3_2_1-SAQ-A.pdf).

![](/images/payment-links.jpg)

---

## Ready to get started?

import CardGrid from "@site/src/components/CardGrid"

<CardGrid home>

[![](/images/dojo-icons/MobileInformation.svg) **Dojo App** Create each payment link manually using Dojo App.](https://support.dojo.tech/hc/en-gb/articles/4415821097874-How-to-use-payment-links)

[![](/images/dojo-icons/BookBookmark.svg) **API step-by-step guide** Generate payment links automatically through the API.](./step-by-step-guide.md)

</CardGrid>
