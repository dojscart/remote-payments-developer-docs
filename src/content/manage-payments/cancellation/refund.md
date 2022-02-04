+++
title = "Refund a payment"
description = ""
weight = 5
+++
{{< lead >}}Find out how to refund a payment using the Dojo API.{{< /lead >}}

Use a refund if you need to return money to your customer, for example if they returned a purchase, you need to refund the payment. You can refund the full payment amount, part of the amount, or make several partial refunds if their amount doesn't exceed the full payment amount.

You can only refund a payment after it has already been [captured](../../capture/). Payments that haven't yet been captured have to be [reversed](../reversal/) instead.

If you want to use the Dojo Merchant app for a refund, see [Refunding online checkout transactions](https://support.dojo.tech/hc/en-gb/articles/4408826217106-Refunding-and-reversing-online-checkout-transactions#h_01FK1SZJWY37BZKNMN0BQ3EYKF).

## Refund using the Dojo API

To return a payment to your customer, use the endpoint below:

{{< code >}} POST /payment-intents/{paymentIntentId}/refunds {{< /code >}}

In your request, include:

* `paymentIntentId`—identifies the payment being refunded.

* `amount`—the refund amount.

* `idempotencyKey`—header parameter to recognize subsequent retries of the same request. Must be unique for each new refund for the payment intent.

For the full API specification, see the [API reference](/api-docs/#operation/Refunds_Create).

### Request example

The next example below shows how you would refund 10.00 GBP.

{{< code lang="bash" >}}
curl --request POST \
  --url https://api.dojo.tech/api/payment-intents/%7Bpi_pT08VyWG3EC_HQB4NBVliA%7D/refunds \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A' \
  --header 'version: 2022-01-03'
  --header 'idempotencyKey: 656565gfyd65' \
  --data '{"amount":1000,"refundReason":"Duplicate transaction","notes":"Problems with the site"}'
 {{< /code >}}

### Response example

If your request is successful, the response will return information about the refund.

{{< code lang="json" >}}
{
  "status": "Created",
  "message": "refund for the order 3443",
  "refundId": "555546464"
}
 {{< /code >}}

## Refund status

When you refund a payment, you get a RefundResponse object in the response, which includes the status field. The status field can be `Created`, `Successful`, or `Failed`.

{{< table style="table-hover" >}}
| Status | Description |
| ------------- | -----|
| `Created`| Dojo is processing the refund.|
| `Successful` | Dojo has approved the refund, refund are being sent to the customer.|
| `Failed`|  The request failed, the customer doesn't receive a refund. It can be caused by, for example, the card receiving the refund is no longer valid, or bad request parameters.|
{{< /table >}}

## Cancel a refund

Once created, the refund can't be canceled. As an option, you can create a new payment intent instead of the one that was refunded.

## See also

* [Change amount](../../change-amount/)

* [Reversal](../reversal/)
