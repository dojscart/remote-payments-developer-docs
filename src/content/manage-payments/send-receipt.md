+++
title = "Send a receipt"
description = ""
weight = 3
+++

{{< lead >}}Learn how to email receipts with the Dojo API.{{< /lead >}}

Dojo automatically sends email receipts after a successful payment. This is done by providing an email address when making the API request, using the email address of a Customer object:

```json
"customer": {
    "emailAddress": "client@gmail.com",
    "phoneNumber": "078654321"
}
```

Each payment has a receipt history where you can view in the Dojo App.

## Send additional emails

You can manually send additional receipts to customers, to do this use the endpoint below:

{{< code >}} POST /payment-intents/{paymentIntentId}/receipt {{< /code >}}

In your request, include:

* `emails`—the list of email addresses to which the receipt should be sent.

For the full API specification, see the [API reference](/api-docs/#operation/Receipt_Create).

### Request example

The next example below shows how you would capture 10.00 GBP.

{{< code lang="bash" >}}
curl --request POST \
  --url https://api.dojo.tech/api/payment-intents/%7Bpi_pT08VyWG3EC_HQB4NBVliA6%7D/receipt \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A' \
  --header 'version: 2022-01-03'
  --data '{"emails":["gabriel@dojo.com","mari@dojo.com"]}'
 {{< /code >}}

### Response example

If your request is successful, the response will return an empty object.

## See also

* [Change amount](../change-amount/)

* [Capture a payment](../capture/)

* [Reversal](../cancellation/reversal/)