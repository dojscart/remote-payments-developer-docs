---
title: Wallet Component
sidebar_position: 2
---

import CodePen from 'codepen-react'

>Learn how you can embed our pre-built wallet component on your checkout page.

Dojo Wallet Component is a pre-built JavaScript component for accepting payments on your checkout page. Use this integration option when you want full control over the payment flow and the look of your online checkout page.
This solution is PCI compliant, you are only required to submit [Self-Assessment Questionnaire A](https://www.pcisecuritystandards.org/documents/PCI-DSS-v3_2_1-SAQ-A.pdf).

In terms of implementation, integration contains:

- Server-side: one API request to create a payment intent.

- Client-side: set up Dojo wallet component, which securely sends payment data to our server.

- Webhook server: receives information about the payment.

If you'd rather do less coding, use pre-build [Dojo Online Checkout](../Online%20checkout/).

## How to process a payment

Step-by-step guide:

1. [Add the component to your checkout page](#step-1-add-the-component-to-your-checkout-page).

2. [Set up Dojo Wallet Component](#step-2-set-up-dojo-wallet-component).

3. [Create a payment intent](#step-3-create-a-payment-intent).

4. [Handle post-payment events](#step-4-handle-post-payment-events)

5. [Test and go live](#step-5-test-and-go-live).

### Before you start

import BeforeStartSnippet from '../../snippets/_before-start.mdx';

<BeforeStartSnippet />

#### Terms and Conditions

- By integrating Apple Pay, you adhere to the [Apple Pay APIs Acceptable Use Policy](https://developer.apple.com/apple-pay/acceptable-use-guidelines-for-websites/) and accept the terms and conditions defined in the [Apple Pay Web Merchant Terms and Conditions](https://developer.apple.com/apple-pay/terms/apple-pay-web/).

- By integrating Google Pay, you adhere to the [Google Pay APIs Acceptable Use Policy](https://payments.developers.google.com/terms/aup) and accept the terms defined in the [Google Pay API Terms of Service](https://payments.developers.google.com/terms/sellertos).

### Step 1. Add the component to your checkout page

Include the Dojo.js script on your checkout page. This script must always load directly from `connect.paymentsense.cloud` to remain PCI compliant—you can’t include it in a bundle or host a copy of it yourself.

```html
<head>
   <script src="https://web.e.test.connect.paymentsense.cloud/assets/js/client.js"></script>
</head>
```

Add empty placeholders div to your checkout page to create a payment form.
For example:

```html
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
```

### Step 2. Set up Dojo Wallet Component

Next, in your JavaScript file, create an instance of Dojo:

```js

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
```

 For an unsuccessful payment, Dojo.js returns an error. The error event returns an object which contains details about the error:

 ```js
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

import GoLiveSnippet from '../../snippets/_test-and-go-live.mdx';

Before going live, test your integration. <GoLiveSnippet />

#### Testing Apple Pay

To enable test cards for Apple Pay, you must have an Apple Sandbox Tester Account, then you will be able to add test cards into your Apple Wallet.

See [Apple's Sandbox Testing Documentation](https://developer.apple.com/apple-pay/sandbox-testing/) to setup your Sandbox Tester Account and check the section Test Cards for Apps and the Web to see the full list of supported test cards by Apple. Although our test payment gateway does not support all of them, so if you want to test successful cases, please use the cards listed in the Test Cards section.

If you are not enrolled into the Apple Developer Program and need a tester account, please contact our support team for further instructions.

#### Testing Google Pay

The Google Pay [Test Card Suite](https://developers.google.com/pay/api/android/guides/resources/test-card-suite) allows you to test Google Pay without the need of adding real cards to Google accounts.

To instantly view these cards in your Google Account TEST environment, join [Google's User Group](https://groups.google.com/g/googlepay-test-mode-stub-data) and all test cards will be automatically added to your account so you do not need to add them manually.

You are free to leave or join [Google's Test Card Suite Group](https://groups.google.com/g/googlepay-test-mode-stub-data) as needed. To leave, select My membership settings and click Leave group.

## Try it out

<CodePen user="myafka" hash="NWapZbz"/>

---

## Next steps

import CardGrid from "@site/src/components/CardGrid"

<CardGrid home>

[![](/images/dojo-icons/AnchorSimple.svg) **Set up notification webhooks** Use webhooks to receive updates related to your payments.](../../Development%20resources/webhooks.md)

[![](/images/dojo-icons/Settings.svg) **Configure Dojo Components** Find out how you can configure the Dojo Components.](configuration)

[![](/images/dojo-icons/Filters.svg) **Manage payments** Learn how to capture or reverse payments, retrieve payment details or change payments amount.](../../Manage%20payments)

</CardGrid>
