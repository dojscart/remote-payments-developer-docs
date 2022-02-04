+++
title = "Capture a payment"
description = ""
weight = 1
+++
{{< lead >}}Learn how to collect a pre-authorised payment with the Dojo API.{{< /lead >}}

After a pre-authorised payment has been created, the payment isn't complete until it has been collected. When you want to collect the payment, you can capture it using the Dojo API. You can capture the full payment amount, part of the amount, or make several partial captures if their amount doesn't exceed the full payment amount.

You can only capture a payment that hasn't yet been refunded or reversed.

## Capture using the Dojo API

To capture a payment, use the endpoint below:

{{< code >}} POST /payment-intents/{paymentIntentId}/captures {{< /code >}}

In your request, include:

* `paymentIntentId`—identifies the payment intent to be captured.

* `amount`—the amount to capture.

For the full API specification, see the [API reference](/api-docs/#operation/Captures_Create).

### Request example

The next example below shows how you would capture 10.00 GBP.

{{< code lang="bash" >}}
curl --request POST \
  --url https://api.dojo.tech/api/payment-intents/%7Bpi_pT08VyWG3EC_HQB4NBVliA%7D/captures \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A' \
  --header 'version: 2022-01-03'
  --data '{"amount":1000}'
 {{< /code >}}

### Response example

If your request is successful, the response will return information about the capture.

{{< code lang="json" >}}
{
  "status": "Created",
  "message": "collect payment for the order 3443",
  "captureId": "5"
}
 {{< /code >}}

## Capture status

When you capture a payment, you get a CaptureResponse object in the response, which includes the status field. The status field can be `Created`, `Successful`, or `Failed`.

{{< table style="table-hover" >}}
| Status | Description |
| ------------- | -----|
| `Created`| Dojo is processing the capture.|
| `Successful` | Dojo has approved the capture, money is being sent to the consumer.|
| `Failed`|  The request failed, the consumer doesn't receive a payment. It can be caused by, for example, the card receiving the capture is no longer valid, or bad request parameters.|
{{< /table >}}

## See also

* [Change amount](../change-amount/)

* [Reversal](../cancellation/reversal/)

* [Send a receipt](../send-receipt/)