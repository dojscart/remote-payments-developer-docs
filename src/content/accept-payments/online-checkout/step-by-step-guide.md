---
title: "Step-by-step guide"
weight: 2
---

{{< lead >}} Learn how to implement our Online checkout page to accept payments.{{< /lead >}}

In terms of implementation, integration contains:

- Server-side: one API request to create a payment intent.

- Client-side: redirect to Dojo online checkout page.

- Webhook server: receives information about the payment.

## How to process a payment

Step-by-step guide:

1. [Create a payment intent](#step-1-create-a-payment-intent).

2. [Redirect your customer to Dojo online checkout page](#step-2-redirect-your-customer-to-dojo-online-checkout-page).

3. [Handle post-payment events](#step-3-handle-post-payment-events)

4. [Test and go live](#step-4-test-and-go-live).

### Before you start

Before you begin to integrate, make sure you have followed the [Getting started guide](/getting-started/) and get your API keys.
For the test environment use your secret key with the prefix `sk_test_`.

### Step 1. Create a payment intent

Call a server-side endpoint from the checkout button on your client-side to create a payment intent, for example:

{{< code lang="html">}}
<html>
<head>
  <title>Checkout</title>
</head>
<body>
  <input type="button" value="Checkout" id="MyButton" onclick="myFunction()">
  <script type="text/javascript">
    function myFunction() {
      // POST
      fetch('/checkout', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          "greeting": ""
        })
      })
    }
  </script>
</body>
</html>
{{< /code >}}

To create a payment intent, the following parameters are required:

- `amount`. This includes the currency and value, in minor units, for example, "1000" for 10.00 GBP.

- `reference`. Your unique reference for the payment intent.

Here's an example of how to create a payment intent for 10 GBP on your server-side:

{{< code lang="Python" file="code/online-checkout/server.py" >}}{{< /code >}}

See the [API reference](/api-docs/#operation/PaymentIntents_CreatePaymentIntent) for a complete list of parameters that can be used for payment intent creation.

### Step 2. Redirect your customer to Dojo online checkout page

After receiving the request, Dojo creates a payment intent and returns its unique id:

{{< code lang="json" file="code/payment-intent-response.json" >}}{{< /code >}}

Return this id to the client-side and use it to create a link in the following format:

`https://pay.dojo.tech/checkout/{{id}}`

Redirect your customer to the link on your client-side:

{{< code lang="js">}}
var redirectLink = "https://pay.dojo.tech/checkout/" + PaymentIntentsResponse.id;
window.location.replace(redirectLink);
{{< /code >}}

After your customer fills payment information on the checkout page, Dojo processes the payment and redirects the customer to the success page.

### Step 3. Handle post-payment events

Use webhooks to receive information about the payment. We send a `payment_intent.status_updated` event when the payment is completed.

If you haven't set up webhooks yet, review our [webhooks guide](../../../development-resources/webhooks/).

### Step 4. Test and go live

Before going live, test your integration using the test card numbers:

{{< table style="table-hover" >}}
|Card Name | Card type | Test credit number | Expiry Date | CVV | 3D security|
|-----|-----|-----|-----|-----|-----|
|Test Cardholder|Visa | 4111 1111 1111 1111 |12/25|123|12345678|
|Test Cardholder|Master Card | 5555 5555 5555 5599 |12/24|123|-|
{{< /table >}}

When you are ready to go live, switch your secret key to production one with the prefix `sk_`.

---

## Next steps

<div class="container"> 
<div class="row py-3 mb-4">
<div class="col-md-4">
		<div class="card flex-row border-0">
			<div class="card-body pl-2">
				<h5 class="card-title">
					<a href="../../../development-resources/webhooks/" class="stretched-link">Set up notification webhooks</a>
				</h5>
				<p class="card-text text-muted">
					Use webhooks to receive updates related to your payments.
				</p>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="card flex-row border-0">
			<div class="card-body pl-2">
				<h5 class="card-title">
					<a href="../configuration/" class="stretched-link">Configure the Online checkout page</a>
				</h5>
				<p class="card-text text-muted">
					Find out how to add another payment method or shipping address form to the page.
				</p>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="card flex-row border-0">
			<div class="card-body pl-2">
				<h5 class="card-title">
					<a href="/manage-payments/" class="stretched-link">Manage payments</a>
				</h5>
				<p class="card-text text-muted">
					Learn how to capture or reverse payments, retrieve payment details or change payments amount.
				</p>
			</div>
		</div>
	</div>
	</div>
</div>
