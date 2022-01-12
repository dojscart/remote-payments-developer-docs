import http.client
import json

conn = http.client.HTTPSConnection("dev-api.dojo.dev")
payload = json.dumps({
  "amount": {
    "value": 1000,
    "currencyCode": "GBP"
  },
  "reference": "string"
})
headers = {
    'content-type': "application/json",
    'version': "2022-01-03",
    'Authorization': "Basic sk_key"
    }
conn.request("POST", "/payment-intents", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))