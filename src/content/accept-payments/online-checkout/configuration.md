---
title: "Optional configurations"
weight: 3
---
{{< lead >}} Learn how to activate additional features for your online checkout page.{{< /lead >}}

You can activate additional features like address collection. Explore a few examples below, or see the API reference for the full list of configurable fields.

- [Add payment methods](#add-payment-methods)

    Integrate Apple Pay and Google Pay wallets in addition to card payments.

- [Collect billing address, shipping details, and customer email](#collect-billing-address-shipping-details-and-customer-email)

    Use your online checkout page to capture useful information about your customer.

- [Redirect to your success page](#redirect-to-your-success-page)

    Show your success page to customers.

- [Show detailed information about the order](#show-detailed-information-about-the-order)

    Set up the information that you want to show to customers.

## Add payment methods

<img src="/images/add-payment-methods.png" alt="drawing" width="800"/>

By default, the online checkout page supports only card payments. To enable Apple Pay and Google Pay wallets pass `"Card","Wallet"` in `paymentMethods`, for example:

{{< code lang="bash" >}}
curl --request POST \
  --url https://api.dojo.tech/payment-intents \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3AYOUR_API_KEY_HERE' \
  --header 'version: 2022-01-03'
  --data '{
           "amount":{"value":1000,"currencyCode":"GBP"},
           "reference":"Order-0001",
           "paymentMethods": [
               "Card", "Wallet"
            ]
            }'
{{</code>}}

Additionally, you need to verify your domain for Apple Pay.

## Collect billing address, shipping details, and customer email

<img src="/images/billing-and-shipping-details.png" alt="drawing" width="800"/>

You can add a form to collect billing address, shipping details, and customer email to the online checkout page.
To do it pass `"collectionRequired": true` in `config.billingAddress`, `config.shippingDetails`, and `config.customerEmail`, for example:

{{< code lang="bash" >}}
curl --request POST \
  --url https://api.dojo.tech/payment-intents \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3AYOUR_API_KEY_HERE' \
  --header 'version: 2022-01-03'
  --data '{
           "amount":{"value":1000,"currencyCode":"GBP"},
           "reference":"Order-0001",
           "config": {
                "customerEmail":{"collectionRequired": true},
                "billingAddress":{"collectionRequired": true},
                "shippingDetails":{"collectionRequired": true}
                }
            }'
{{</code>}}

## Redirect to your success page

After your customer fills payment information on the checkout page, Dojo processes the payment and redirects the customer to the success page. You can redirect the customer to another page after the payment. To do it pass the url in `config.redirectUrl`, for example:

{{< code lang="bash" >}}
curl --request POST \
  --url https://api.dojo.tech/payment-intents \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3AYOUR_API_KEY_HERE' \
  --header 'version: 2022-01-03'
  --data '{
           "amount":{"value":1000,"currencyCode":"GBP"},
           "reference":"Order-0001",
           "config": {
               "redirectUrl": "http://site.com/checkout/succes_pay"
                }
            }'
{{</code>}}

## Show detailed information about the order

You can add information about each position in the order to the online checkout page.
To do it pass `itemLines` and `taxLines`, for example:
{{< code lang="bash" >}}
curl --request POST \
  --url https://api.dojo.tech/payment-intents \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3AYOUR_API_KEY_HERE' \
  --header 'version: 2022-01-03'
  --data '{
           "amount":{"value":1000,"currencyCode":"GBP"},
           "reference":"Order-0001",
           "itemLines": [
                {
                "id": "item 1",
                "quantity": 4,
                "caption": "Dog socks",
                "amountTotal": {
                        "value": 400,
                        "currencyCode": "GBP"
                    }
                },
                {
                "id": "item 5",
                "quantity": 1,
                "caption": "Dog bandana",
                "amountTotal": {
                        "value": 600,
                        "currencyCode": "GBP"
                    }
                }
            ]
            }'
{{</code>}}

## More information

<div class="row py-3 mb-5">
	<div class="col-md-5">
		<div class="card flex-row border-0">
			<div class="card-body pl-2">
				<h5 class="card-title">
					<a href="../../../api-docs/" class="stretched-link">API Reference</a>
				</h5>
				<p class="card-text text-muted">
					See the API reference for a complete list of parameters you use.
				</p>
			</div>
		</div>
	</div>
</div>
