---
title: "Cancel a payment"
hide: 
  - toc
weight: 3
disableReadmoreNav: true
---

{{< lead >}}Find out how to cancel a payment that hasn't yet been authorized.{{< /lead >}}

Use a cancel if you don’t want to proceed with a payment, for example because authorization is declined by the card issuer.
You can only cancel a payment before it has already been authorized. Payments that have yet been authorized have to be [reversed](../reversal/) instead.

## Cancel using the Dojo API

To cancel a payment to your customer, use the endpoint below:

{{< code >}} DELETE /payment-intents/{paymentIntentId} {{< /code >}}

In your request, include:

* `paymentIntentId`—identifies the payment being canceled.

For the full API specification, see the [API reference](/api-docs/#operation/PaymentIntents_Delete).

### Request example

The next example below shows how you would cancel a payment intent.

{{< code lang="bash" >}}
curl --request DELETE \
  --url https://api.dojo.tech/payment-intents/%7Bpi_pT08VyWG3EC_HQB4NBVliA%7D \
  --header 'Authorization: Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A' \
  --header 'version: 2022-01-03'
 {{< /code >}}

### Response example

If your request is successful, the response will return information about the canceled payment.

{{< code lang="json" >}}
{
  "id": "pi_pT08VyWG3EC_HQB4NBVliA",
  "status": "Canceled",
  ...
}
 {{< /code >}}

## See also

* [Change amount](../../change-amount/)

* [Reversal](../reversal/)
