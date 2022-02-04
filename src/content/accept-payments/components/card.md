---
title: "Card component"
weight: 2
---
{{< lead >}}Learn how you can embed our pre-built card component on your checkout page.{{< /lead >}}

Dojo card component is a pre-built JavaScript component for accepting payments on your checkout page. Use this integration option when you want full control over the payment flow and the look of your online checkout page.
This solution is PCI compliant, you are only required to submit [Self-Assessment Questionnaire A](https://www.pcisecuritystandards.org/documents/PCI-DSS-v3_2_1-SAQ-A.pdf).

In terms of implementation, integration contains:

- Server-side: one API request to create a payment intent.

- Client-side: set up Dojo card component, which securely sends payment data to our server.

- Webhook server: receives information about the payment.

If you'd rather do less coding, use one of our pre-built [online checkout page](../../online-checkout/).

## How to process a payment

Step-by-step guide:

1. [Add the card component to your checkout page](#step-1-add-the-card-component-to-your-checkout-page).

2. [Set up Dojo card component](#step-2-set-up-dojo-card-component).

3. [Create a payment intent](#step-3-create-a-payment-intent).

4. [Handle post-payment events](#step-4-handle-post-payment-events)

5. [Test and go live](#step-5-test-and-go-live).

### Before you start

Before you begin to integrate, make sure you have followed the [Getting started guide](/getting-started/) and get your API keys.
For the test environment use your secret key with the prefix `sk_test_`.

### Step 1. Add the card component to your checkout page

Include the Dojo.js script on your checkout page. This script must always load directly from `connect.paymentsense.cloud` to remain PCI compliant — you can’t include it in a bundle or host a copy of it yourself.

{{< code lang="HTML">}}
<head>
   <script src="https://web.e.test.connect.paymentsense.cloud/assets/js/client.js"></script>
</head>
{{< /code >}}

Add empty placeholders div to your checkout page to create a payment form.
For example:

{{< code lang="HTML">}}
<body>
    <div id="demo-payment"></div>
    <div id="errors"></div>
    <button id="testPay" class="btn-primary btn pull-right" data-loading-text="Processing...">Pay</button>
    <div id="demo-result" style="display: none">
        <h5>Payment Complete</h5>
        <dl>
            <dt>Status Code</dt>
            <dd id="status-code"></dd>
            <dt>Auth Code</dt>
            <dd id="auth-code"></dd>
        </dl>
    </div>
</body>
{{< /code >}}

### Step 2. Set up Dojo card component

Next, in your JavaScript file, create an instance of Dojo:

{{< code lang="js">}}

    .then(response => response.json())
    .then(function (data) {
        const payConfig = {
            paymentDetails: {
                paymentToken: data.paymentToken
            },
            containerId: "demo-payment",
            fontCss: ['https://fonts.googleapis.com/css?family=Do+Hyeon'],
            styles: {
                base: {},
            }
        }
        // intialising connection
        const connectE = new Connect.ConnectE(config, displayErrorsCallback);

        // sending payment on button click and processing the response
        const btnTestPay = document.getElementById("testPay");

        btnTestPay.onclick = () => {
            btnTestPay.innerText = 'loading';
            btnTestPay.setAttribute("disabled", "true");
            connectE.executePayment()
                .then(function (data) {
                    document.getElementById("demo-payment").hidden = true;
                    btnTestPay.remove();
                    document.getElementById("demo-result").hidden = false;
                    document.getElementById("status-code").innerText = data.statusCode;
                    document.getElementById("auth-code").innerText = data.authCode;
                }).catch(function (data) {
                    console.log('Payment Request failed: ' + data);
                    btnTestPay.innerText = 'Pay';
                    btnTestPay.removeAttribute("disabled");
                    if (typeof data === 'string') {
                        document.getElementById("errors").innerText = data;
                    }
                    if (data && data.message) {
                        document.getElementById("errors").innerText = data.message;
                    }
                }
                );
        };
{{< /code >}}

 For an unsuccessful payment, Dojo.js returns an error. The error event returns an object which contains details about the error:

 {{< code lang="js">}}
     // handling errors
        function displayErrorsCallback(errors) {
            const errorsDiv = document.getElementById('errors');
            errorsDiv.innerHTML = '';
            if (errors && errors.length) {
                const list = document.createElement("ul");
                for (const error of errors) {
                    const item = document.createElement("li");
                    item.innerText = error.message;
                    list.appendChild(item);
                }
                errorsDiv.appendChild(list);
            }
        }
{{< /code >}}

See the [Optional configuration](../configuration) for a complete list of parameters that you can use.

### Step 3. Create a payment intent

Call a server-side endpoint to create a payment intent, for example:

{{< code lang="js">}}
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
{{< /code >}}

To create a payment intent, the following parameters are required:

- `amount`. This includes the currency and value, in minor units, for example, "1000" for 10.00 GBP.

- `reference`. Your unique reference for the payment intent.

Here's an example of how to create a payment intent on your server-side:

{{< code lang="Python" file="code/components/server.py" >}}{{< /code >}}

See the [API reference](/api-docs/#operation/PaymentIntents_CreatePaymentIntent) for a complete list of parameters that can be used for payment intent creation.

### Step 4. Handle post-payment events

Use webhooks to receive information about the payment. We send a `payment_intent.status_updated` event when the payment is completed.

If you haven't set up webhooks yet, review our [webhooks guide](../../../development-resources/webhooks/).

### Step 5. Test and go live

Before going live, test your integration using the test card numbers:

{{< table style="table-hover" >}}
|Card Name | Card type | Test credit number | Expiry Date | CVV | 3D security|
|-----|-----|-----|-----|-----|-----|
|Test Cardholder|Visa | 4111 1111 1111 1111 |12/25|123|12345678|
|Test Cardholder|Master Card | 5555 5555 5555 5599 |12/24|123|-|
{{< /table >}}

When you are ready to go live, switch your secret key to production one with the prefix `sk_`.

## Try it out

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="js,result" data-user="myafka" data-slug-hash="ExwWzpM" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/myafka/pen/ExwWzpM"></a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

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
					<a href="../configuration/" class="stretched-link">Configure Dojo Components</a>
				</h5>
				<p class="card-text text-muted">
					Find out how you can configure the Dojo Components.
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
