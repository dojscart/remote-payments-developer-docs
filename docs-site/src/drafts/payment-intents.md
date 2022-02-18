---
title: "Payment intents"
date: 2017-03-02T12:00:00-05:00
icon: "ti-panel"

---

{{< lead >}} Learn how to use payment intents and they lifecycle. {{< /lead >}}

A payment intent tracks payment from creation through checkout, and triggers additional authentication steps when required. It encapsulates details about the transaction, such as the supported payment methods, the amount to capture, and the desired currency.

A way to build dynamic payment flows. A Payment Intent tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates,


1. The customer opens the Checkout page.

2. Your server uses the customer's country and currency information from your client to create a payment session.

3. Your client creates an instance.

4. Online checkout shows the available payment methods, makes the payment request, handles additional actions, and presents the payment result to the shopper.

## Step 1: Create a payment intent on your server

{{< code lang="Python" file="code/server.py" >}}{{< /code >}}

See the [API reference](/api-docs/#operation/PaymentIntents_CreatePaymentIntent) for a complete list of parameters that can be used for payment intent creation.

## Step 2: Set up Dojo.js

Next, create an instance of the Dojo object by providing payment details and connecteToken as the first parameter:

{{< code lang="JS" file="code/script.js" >}}{{< /code >}}

## Step 3: Add Checkout to your website

Include the following script tag on your website.

{{< code lang="HTML" file="code/checkout.html" >}}{{< /code >}}

## Result

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="js,result" data-user="myafka" data-slug-hash="ExwWzpM" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/myafka/pen/ExwWzpM"></a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## How payment intents work

Each payment intent will progress through some combination of the statuses listed below.

<img src="/images/payment-intents-status.png" alt="drawing" width="1000"/>

{{< table style="STYLE" >}}
| Status | Description | Next steps |
| ------------- |:-------------:| -----:|
| Created |    |   |
| Authorized |    |  |
| Captured |   | |
| Reversed |           |   |
| Refunded |           |   |
| Canceled | You have successfuly cancelled the payment. |  |
{{< /table >}}
