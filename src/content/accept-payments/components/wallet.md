---
title: "Wallet component"
weight: 3
---

{{< lead >}}Learn how you can embed our pre-built wallet component on your checkout page.{{< /lead >}}

Dojo wallet component is a pre-built JavaScript component for accepting payments on your checkout page. Use this integration option when you want full control over the payment flow and the look of your online checkout page.
This solution is PCI compliant, you are only required to submit [Self-Assessment Questionnaire A](https://www.pcisecuritystandards.org/documents/PCI-DSS-v3_2_1-SAQ-A.pdf).

In terms of implementation, integration contains:

- Server-side: one API request to create a payment intent.

- Client-side: set up Dojo wallet component, which securely sends payment data to our server.

- Webhook server: receives information about the payment.

If you'd rather do less coding, use one of our pre-built [online checkout page](../../online-checkout/).

## How to process a payment

Step-by-step guide:

1. [Add the wallet component to your checkout page](#step-1-add-the-wallet-component-to-your-checkout-page).

2. [Set up Dojo wallet component](#step-2-set-up-dojo-card-component).

3. [Create a payment intent](#step-3-create-a-payment-intent).

4. [Handle post-payment events](#step-4-handle-post-payment-events)

5. [Test and go live](#step-5-test-and-go-live).

### Before you start

Before you begin to integrate, make sure you have followed the [Getting started guide](/getting-started/) and get your API keys.
For the test environment use your secret key with the prefix `sk_test_`.

**Terms and Conditions**

- By integrating Apple Pay, you adhere to the [Apple Pay APIs Acceptable Use Policy](https://developer.apple.com/apple-pay/acceptable-use-guidelines-for-websites/) and accept the terms and conditions defined in the [Apple Pay Web Merchant Terms and Conditions](https://developer.apple.com/apple-pay/terms/apple-pay-web/).

- By integrating Google Pay, you adhere to the [Google Pay APIs Acceptable Use Policy](https://payments.developers.google.com/terms/aup) and accept the terms defined in the [Google Pay API Terms of Service](https://payments.developers.google.com/terms/sellertos).

### Step 1. Add the wallet component to your checkout page

Include the Dojo.js script on your checkout page. This script must always load directly from `connect.paymentsense.cloud` to remain PCI compliant—you can’t include it in a bundle or host a copy of it yourself.

{{< code lang="HTML">}}
<head>
   <script src="https://web.e.test.connect.paymentsense.cloud/assets/js/client.js"></script>
</head>
{{< /code >}}

Add empty placeholders div to your checkout page to create a payment form.
For example:

{{< code lang="HTML">}}
<body>
  <div id="demo-payment-wallet"></div>
  <div id="errors"></div>
  <div id="demo-result" hidden>
    <h5>Payment Complete</h5>
    <dl>
        <dt>Status Code</dt>
        <dd id="status-code"></dd>
        <dt>Auth Code</dt>
        <dd id="auth-code"></dd>
        <dt>Message</dt>
        <dd id="message"></dd>
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
                countryCode: 'GB',
                paymentToken: data.paymentToken
            },
            containerId: "demo-payment-wallet",
            buttonConfig: {
              color: 'black',
              type: 'plain'
            },
            emailRequired: true,
            billingAddressRequired: false,
            shippingAddressRequired: false
        }
        // intialising connection
        const wallet = new Connect.Wallet(config, displayErrors, paymentComplete);

        function paymentComplete(response) {
          document.getElementById('demo-payment-wallet').hidden = true;
          document.getElementById('demo-result').hidden = false;
          document.getElementById('status-code').innerText = response.statusCode;
          document.getElementById('auth-code').innerText = response.authCode;
          document.getElementById('message').innerText = response.message;
    }
{{< /code >}}

 For an unsuccessful payment, Dojo.js returns an error. The error event returns an object which contains details about the error:

 {{< code lang="js">}}
     // handling errors
      function displayErrors(errors) {
        const errorsDiv = document.getElementById('errors');
        errorsDiv.innerHTML = '';

        if (errors && errors.length) {
          const list = document.createElement('ul');
          for (const error of errors){
              const item = document.createElement('li');
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

Before going live, test your integration. When you are ready to go live, switch your secret key to production one with the prefix `sk_`.

#### Testing Apple Pay

To enable test cards for Apple Pay, you must have an Apple Sandbox Tester Account, then you will be able to add test cards into your Apple Wallet.

See [Apple's Sandbox Testing Documentation](https://developer.apple.com/apple-pay/sandbox-testing/) to setup your Sandbox Tester Account and check the section Test Cards for Apps and the Web to see the full list of supported test cards by Apple. Although our test payment gateway does not support all of them, so if you want to test successful cases, please use the cards listed in the Test Cards section.

If you are not enrolled into the Apple Developer Program and need a tester account, please contact our support team for further instructions.

#### Testing Google Pay

The Google Pay [Test Card Suite](https://developers.google.com/pay/api/android/guides/resources/test-card-suite) allows you to test Google Pay without the need of adding real cards to Google accounts.

To instantly view these cards in your Google Account TEST environment, join [Google's User Group](https://groups.google.com/g/googlepay-test-mode-stub-data) and all test cards will be automatically added to your account so you do not need to add them manually.

You are free to leave or join [Google's Test Card Suite Group](https://groups.google.com/g/googlepay-test-mode-stub-data) as needed. To leave, select My membership settings and click Leave group.

## Try it out

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="js,result" data-user="myafka" data-slug-hash="NWapZbz" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/myafka/pen/NWapZbz"></a>.</span>
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
