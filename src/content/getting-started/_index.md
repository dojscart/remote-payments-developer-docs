---
title: "Getting started"
icon: "ti-panel"
hide: 
  - toc
weight: 1
disableReadmoreNav: true
---
{{< lead >}} Set up your developer account and make a first payment.{{< /lead >}}

{{< panel title="Not a developer?" style="dark" >}} Check out our [no-code solutions](/no-code/).{{< /panel >}}

## Step 1. Get your API keys

To submit payments, you'll be making API requests that are authenticated with an API key. To generate your API keys, send a request to our support team.

Copy and securely store the API key in your system—you won't be able to restore it later.
If your API key is lost or compromised, you need to ask for a new one.

## Step 2. Make a test API call

To verify that your key is working correctly, let's create a test API call.
Copy the code below into a command line, replace `YOUR_API_KEY_HERE` with your test API key (with the prefix `sk_test_`), and run the command.

{{< code lang="Shell" file="code/create-payment-intent.sh" >}}{{< /code >}}

If your account is set up correctly, you receive a response: `200 OK`.

## Next steps

You're now ready to start building your payment integration. You can integrate with our API in several ways, for a detailed integration guide, select an option below:

<div class="container"> 
<div class="row py-3 mb-5">
	<div class="col-md-5">
		<div class="card flex-row border-0">
			<div class="mt-3">
				<span class="fas fa-2x text-primary"><img src="/images/dojo-icons/icons-50-px-sim.svg" width="70"></span>
			</div>
			<div class="card-body pl-2">
				<h5 class="card-title">
					<a href="../accept-payments/online-checkout/" class="stretched-link">Online checkout</a>
				</h5>
				<p class="card-text text-muted">
					A pre-built payment page for accepting payments on your website.
				</p>
			</div>
		</div>
	</div>
	<div class="col-md-5">
		<div class="card flex-row border-0">
			<div class="mt-3">
				<span class="fas fa-2x text-primary"><img src="/images/dojo-icons/push-notifications.svg" width="70"></span>
			</div>
			<div class="card-body pl-2">
				<h5 class="card-title">
					<a href="../accept-payments/payment-links/" class="stretched-link">Payment links</a>
				</h5>
				<p class="card-text text-muted">
					Links that you send to your customer and accept payments without a website.
				</p>
			</div>
		</div>
	</div>
	<div class="col-md-5">
		<div class="card flex-row border-0">
			<div class="mt-3">
				<span class="fas fa-2x text-primary"><img src="/images/dojo-icons/icons-50-px-business-development.svg" width="70"></span>
			</div>
			<div class="card-body pl-2">
				<h5 class="card-title">
					<a href="../accept-payments/components/" class="stretched-link">Dojo components</a>
				</h5>
				<p class="card-text text-muted">Our ready-made JavaScript components that you can combine with your own components.
				</p>
			</div>
		</div>
	</div>
	<div class="col-md-5">
		<div class="card flex-row border-0">
			<div class="mt-3">
				<span class="fas fa-2x text-primary"><img src="/images/dojo-icons/icons-50-px-business-development.svg" width="70"></span>
			</div>
			<div class="card-body pl-2">
				<h5 class="card-title">
					<a href="../accept-payments/api-only/" class="stretched-link">API only</a>
				</h5>
				<p class="card-text text-muted">A solution for creating your own UI and having full control over your payment page.
				</p>
			</div>
		</div>
	</div>
</div>

To learn more about the available integration options, see [Accept payments](../accept-payments/).
