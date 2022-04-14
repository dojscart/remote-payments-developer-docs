---
title: "Payment Intent"
sidebar_position: 4
id: payment-intent
hide_table_of_contents: true
---
## Overview

Payment Intents is the process of monitoring a payment cycle from creation to checkout. Here, a customer initiates a payment, and you as a developer can easily track the status or progress in case of a missing or incomplete payment. This is intended so that you can take corrective business actions.

## Creating Payment Intent

To create a payment intent, go to [Creating a Payment Intent](https://staging-docs.dojo.dev/master/docs/accept-payments/online-checkout/step-by-step-guide#step-1-create-a-payment-intent).

## Payment Intent States and Flow

The Payment Intent flow starts from the time an online payment transaction is initiated till the transaction is successfully complete. The following chart shows the flow.

### States

|State| Description|
|--------|----------|
| Captured | Money is successfully collected. |
| Authorized | Payment is authorized for future capturing which may later be captured or released.|
| Created | Payment created but no attempts to payout.|
| Reversed | Payment collected and afterwards reversed successfully.|
| Refunded | Payment collected and afterwards refunded successfully.|
| Canceled | Payment created and then voided before any payment attempt made.|
| Failed | Payment created and with one attempt to pay registered, but not captured or authorized.|

### Flow

![Payment Intent Flow](/images/payment_intent_flow.jpg)

Once a payment intent is created, the pre-authorization check is initiated. Failure in pre-authorization results in cancelation of the payment intent.
Based on the capture mode, the payment intent is divided into the following.

- **Manual**: Payment is collected after successful authorization. The payment is kept on hold for 7 days. After 7 days, the payment is released, or refunded, or reversed, if not collected.
- **Auto**: Payment is immediately collected, or refunded, or reversed. There is no holding period.

### Pre-authorised Transactions

The pre-authorised state of a transaction is the one before authorization is made. The pre-authorized transactions have the following three states.

- Awaiting collection
- Released
- Expired

> **Note:** The manual authorization state has a validity of 7 days only.

## Webhooks

Webhooks are real-time server notifications sent to your server to notify you when the state of a payment intent changes. For more information,see [Webhooks](https://docs.dojo.tech/docs/development-resources/webhooks).

### Tips

Always refresh the token when restarting an unsuccessful payment intent.
