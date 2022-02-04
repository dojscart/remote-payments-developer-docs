+++
title = "Reverse a payment"
description = ""
weight = 3
+++
{{< lead >}}Learn how to reverse a payment with the Dojo API.{{< /lead >}}

Use a reversal if you need to cancel a payment, for example if you mistakenly initiated a payment, or a customer has requested a payment to be canceled. You can reverse the full payment amount only. Reversals can only be actioned on the same calendar day as the original payment.

You can only reverse a payment before it has been [captured](../../capture/). Payments that have already been captured have to be [refunded](../refund/) instead.

If you want to use the Dojo Merchant app for a reversal, see [Reversing online checkout transactions](https://support.dojo.tech/hc/en-gb/articles/4408826217106-Refunding-and-reversing-online-checkout-transactions#h_01FK1T29A54JCYNZ9ZE4HK3G7T).

## Reverse using the Dojo API

To reverse a payment, use the endpoint below:

{{< code >}} POST /payment-intents/{paymentIntentId}/reversal {{< /code >}}

In your request, include:

* `paymentIntentId`—identifies the payment being reverse.

For the full API specification, see the [API reference](/api-docs/#operation/Reversal_Create).

### Request example

The next example below shows how you would reverse the payment intent `pi_pT08VyWG3EC_HQB4NBVliA`.

{{< code lang="bash" >}}
curl --request POST \
  --url https://api.dojo.tech/api/payment-intents/%7Bpi_pT08VyWG3EC_HQB4NBVliA%7D/reversal \
  --header 'Authorization: Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A' \
  --header 'version: 2022-01-03'
 {{< /code >}}

### Response example

If your request is successful, the response will return information about the reversal.

{{< code lang="json" >}}
{
  "status": "Created",
  "message": "reverse for the order 3443",
  "reversalId": "55873"
}
 {{< /code >}}

## Reversal status

When you reverse a payment, you get a ReverseResponse object in the response, which includes the status field. The status field can be `Created`, `Successful`, or `Failed`.

{{< table style="table-hover" >}}
| Status | Description |
| ------------- | -----|
| `Created`| Dojo is processing the reversal.|
| `Successful` | Dojo has approved the reversal, reversal are being sent to the customer.|
| `Failed`|  The request failed, the customer doesn't receive a reversal. It can be caused by, for example, bad request parameters.|
{{< /table >}}

## Cancel a reverse

Once created, the reverse can't be canceled. As an option, you can create a new payment intent instead of the one that was reversed.

## See also

* [Change amount](../../change-amount/)

* [Capture a payment](../../capture/)

* [Send a receipt](../../send-receipt/)
