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

## Step 1. Create a developer account

Get started by creating a [free developer account](https://account.dojo.tech/login).  If you build a solution for a client, ask them to [send you an invitation](add link).

## Step 2. Generate your API keys

To submit payments, you'll be making API requests that are authenticated with an API key. To generate your API keys, go to **Developer portal** --> **API keys** and select **+Create secret key**.

<img src="/images/api-keys.png" alt="drawing" width="1000"/>

Copy and securely store the API key in your system — you won't be able to restore it later.
If your API key is lost or compromised, you need to generate a new one.

## Step 3. Make a test API call

To verify that your account is working correctly, let's create a test payment for 10 GBP.
Copy the code below into a command line, replace YOUR_API_KEY_HERE with your test API key (with the prefix `sk_sandbox_`), and run the command.

{{< code lang="Shell" file="code/create-payment-intent.sh" >}}{{< /code >}}

If your account is set up correctly, you receive a response: `200 OK`. You have just created a payment of 10 GBP.
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
					Online checkout is a pre-built payment page and complete checkout experience that can be branded for your business.
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
					Generate a payment link, send it to your customer and they will redirect to our payment page to complete the purchase.
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
				<p class="card-text text-muted">Create your own UI and have full control over your payment page.
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
				<p class="card-text text-muted">Create your own UI and have full control over your payment page.
				</p>
			</div>
		</div>
	</div>
	<div class="col-md-5">
		<div class="card flex-row border-0">
			<div class="mt-3">
				<span class="fas fa-2x text-primary"><img src="/images/dojo-icons/customer-support_v4.svg" width="70"></span>
			</div>
			<div class="card-body pl-2">
				<h5 class="card-title">
			       <a href="https://support.dojo.tech/hc/en-gb" class="stretched-link">Need a hand?</a>
				</h5>
				<p class="card-text text-muted">
					Our support team always happy to help with any questions you have.
				</p>
			</div>
		</div>
	</div>
</div>

To learn more about the available integration options, see [Accept payments](../accept-payments/).
