curl --request POST \
  --url https://api.dojo.tech/payment-intents \
  --header 'content-type: application/json' \
  --header 'Authorization: YOUR_API_KEY_HERE' \
  --header 'version: 2022-01-03'
  --data '{"captureMode":"Auto",
            "amount":{"value":1000,"currencyCode":"GBP"},
            "reference":"string",
            "paymentMethods": [
              "Card"
              ]
            }'