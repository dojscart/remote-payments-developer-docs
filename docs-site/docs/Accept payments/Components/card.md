---
title: Card Component
sidebar_position: 1
---

import CodePen from 'codepen-react'

>Learn how you can embed pre-built Dojo Card Component on your checkout page.

Dojo Card Component is a pre-built JavaScript component for accepting payments on your checkout page. Use this integration option when you want full control over the payment flow and the look of your online checkout page.
This solution is PCI compliant, you are only required to submit [Self-Assessment Questionnaire A](https://www.pcisecuritystandards.org/documents/PCI-DSS-v3_2_1-SAQ-A.pdf).

In terms of implementation, integration contains:

- Server-side: one API request to create a payment intent.

- Client-side: set up Dojo card component, which securely sends payment data to our server.

- Webhook server: receives information about the payment.

If you'd rather do less coding, use pre-build [Dojo Online Checkout](../Online%20checkout/).

## How to process a payment

Step-by-step guide:

1. [Add the component to your checkout page](#step-1-add-the-component-to-your-checkout-page).

2. [Set up Dojo Card Component](#step-2-set-up-dojo-card-component).

3. [Create a payment intent](#step-3-create-a-payment-intent).

4. [Handle post-payment events](#step-4-handle-post-payment-events)

5. [Test and go live](#step-5-test-and-go-live).

### Before you start

Before you begin to integrate, make sure you have followed the [Getting started guide](../../Getting%20started/) and get your API keys.
For the test environment use your secret key with the prefix `sk_test_`.

### Step 1. Add the component to your checkout page

Include the Dojo.js script on your checkout page. This script must always load directly from `connect.paymentsense.cloud` to remain PCI compliant — you can’t include it in a bundle or host a copy of it yourself.

```html
<head>
   <script src="https://web.e.test.connect.paymentsense.cloud/assets/js/client.js"></script>
</head>
```

Add empty placeholders div to your checkout page to create a payment form.
For example:

```html
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
```

### Step 2. Set up Dojo card component

Next, in your JavaScript file, create an instance of Dojo:

```js

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
```

 For an unsuccessful payment, Dojo.js returns an error. The error event returns an object which contains details about the error:

```js
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
```

See the [Optional configuration](configuration) for a complete list of parameters that you can use.

### Step 3. Create a payment intent

Call a server-side endpoint to create a payment intent, for example:

```js
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
```

To create a payment intent, the following parameters are required:

- `amount`. This includes the currency and value, in minor units, for example, "1000" for 10.00 GBP.

- `reference`. Your unique reference for the payment intent.

Here's an example of how to create a payment intent on your server-side:

```py title="server.py"
 payload = json.dumps({
          "amount": {
            "value": 1000,
            "currencyCode": "GBP"
          },
          "reference": "Order 245"
          })
        headers = {
            'content-type': "application/json",
            'version': "2022-01-03",
            'Authorization': "Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A" # <-- Change to your secret key
            }
        conn.request("POST", "/payment-intents/", payload, headers)

        # handling the response from POST
        res = conn.getresponse()
        data = res.read()
        resp_data = {}
        resp_data['paymentToken'] = json.loads(data)["connecteToken"]
        json_data = json.dumps(resp_data)
        resp = app.response_class(
          response=json_data,
          mimetype='application/json'
          )
        return resp
```

See the [API reference](/api#operation/PaymentIntents_CreatePaymentIntent) for a complete list of parameters that can be used for payment intent creation.

### Step 4. Handle post-payment events

Use webhooks to receive information about the payment. We send a `payment_intent.status_updated` event when the payment is completed.

If you haven't set up webhooks yet, review our [webhooks guide](../../Development%20resources/webhooks.md).

### Step 5. Test and go live

Before going live, test your integration using the test card numbers:

import CardSnippet from '../../snippets/_card.mdx';

<CardSnippet />

When you are ready to go live, switch your secret key to production one with the prefix `sk_`.

## Try it out

<CodePen user="myafka" hash="ExwWzpM"/>

---

## Next steps

import CardGrid from "@site/src/components/CardGrid"

<CardGrid home>

[![](/images/dojo-icons/AnchorSimple.svg) **Set up notification webhooks** Use webhooks to receive updates related to your payments.](../../Development%20resources/webhooks.md)

[![](/images/dojo-icons/Settings.svg) **Configure Dojo Components** Find out how you can configure the Dojo Components.](configuration)

[![](/images/dojo-icons/Filters.svg) **Manage payments** Learn how to capture or reverse payments, retrieve payment details or change payments amount.](../../Manage%20payments)

</CardGrid>
