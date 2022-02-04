---
title: "Payment links"
weight: 2
---

{{< lead >}} Learn about Dojo payment links.{{< /lead >}}

Dojo payment link is a link you can send to your customer, and it will take them to a Dojo online checkout page for them to complete the payment. The payment page works across different devices and can be customized. With the payment links, you can sell online without a website. You could send the payment links after interacting with your customer through chat or email, or any other channel.

You can create payment links either in the Dojo app, or using the Dojo API. To create payment links in the Dojo app, you don't need development, but you need to manually create a link every time you have a new order. When using the API, you can automate this process, but you will need a developer.

Payment links don't expire, but each link can only be used to make one successful payment. After a customer makes a successful payment, anyone accessing the same link will see a message "Payment successful".

This solution is PCI compliant, you are required to submit [Self-Assessment Questionnaire A](https://www.pcisecuritystandards.org/documents/PCI-DSS-v3_2_1-SAQ-A.pdf).

<img src="/images/payment-links.png" alt="drawing" width="800"/>

## Ready to get started?

<div class="row py-3 mb-5">
	<div class="col-md-5">
		<div class="card flex-row border-0">
			<div class="card-body pl-2">
				<h5 class="card-title">
					<a href="https://support.dojo.tech/hc/en-gb/articles/4415821097874-How-to-use-payment-links" class="stretched-link">Dojo App</a><span class="badge">No-code</span>
				</h5>
				<p class="card-text text-muted">
					Create each payment link manually using Dojo App.
				</p>
			</div>
		</div>
	</div>
    <div class="col-md-5">
		<div class="card flex-row border-0">
			<div class="card-body pl-2">
				<h5 class="card-title">
					<a href="/accept-payments/payment-links/step-by-step-guide/" class="stretched-link">API</a>
				</h5>
				<p class="card-text text-muted">
					Generate payment links automatically through the API.
				</p>
			</div>
		</div>
	</div>
</div>
