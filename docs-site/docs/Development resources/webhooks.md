---
title: "Webhooks"
weight: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Learn how to get notified of any changes in your payments' data.

Webhooks allow your application to receive notifications when certain events occur. For example, when a payment status is updated, Dojo will make a POST request to your URL and let you know about it. You can create 1 webhook for each event. Use the [Webhooks API](/api#tag/Webhooks) to specify which events you would like to be notified about.

Every webhook from Dojo includes a `dojo-signature` header. You can use this to verify that the data is coming from Dojo.

## Create webhooks

To start using webhooks, you need:

1. [Choose which events to subscribe to](#step-1-choose-which-events-to-subscribe-to).
2. [Enable the webhook using the webhook endpoint](#step-2-enable-the-webhook).
3. [Verify Dojo webhooks](#step-3-verify-dojo-webhooks).
4. [Go live](#step-4-go-live).

### Before you start

Before you begin, make sure you have followed the [Getting started guide](../Getting%20started/) and get your API keys. Webhooks API use the same Basic Authentication as Dojo API.
For the test environment, use your secret key with the prefix `sk_test_`.

### Step 1. Choose which events to subscribe to

You can have a list of all events by sending a `GET` request to Dojo's webhooks endpoints.

```GET /webhooks/events```

We recommend subscribing to the `payment_intent.status_updated` event to receive updates on changes in the status of your payment intents. For a complete list of available events and their payloads, see [Available webhooks](#available-webhooks).

### Step 2. Enable the webhook

To enable a webhook using the API, use the endpoint below:

``` POST /webhooks ```

In your request, include:

* `events`—the list of events you would like to subscribe to. For the list of the events, see [Available webhooks](#available-webhooks).

* `url`—the endpoint the Dojo servers will send notifications to. The endpoint must be accessible from the public internet for the webhook to work. It must be an HTTPS endpoint as well. If you want to test webhooks before you create or configure a live service, you can use one of several request logging sites, for example, [WebHook Tester](https://webhook.site/).

Here's an example of how to subscribe to the `payment_intent.status_updated` event:

<Tabs groupId="codeGroup">
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/webhooks/python/enable-webhooks.py
```

  </TabItem>
  <TabItem value="C#" label="C#">

```cs reference
https://github.com/dojo-engineering/dojo-samples/blob/main/webhooks/cs/enable-webhooks.cs
```

  </TabItem>
</Tabs>

For the full API specification, see the [API reference](/api/#tag/Webhooks).

### Step 3. Verify Dojo webhooks

To verify the authenticity of the webhook, you need to digest the received payload body by using [HMAC-SHA256](https://en.wikipedia.org/wiki/HMAC) with your `secret.value` as a key. If the result matches the one that you received in the `dojo-signature` header, then the webhook is authentic.

For example,

* for the following body: `{"id":"evt_hnnHxIKR_Uy6bhZCusCltw","event":"payment_intent.created","accountId":"acc_test","createdAt":"2022-02-01T13:07:41.8667859Z","data":{"paymentIntentId":"pi_vpwd4ooAPEqyNAQe4z89WQ","paymentStatus":"Created","captureMode":"Auto"}}`

* where the secret to calculate the signature was: `ws_OYsyzcrH70GpJfs8MMkKpg`

* the signature header would be: `sha256=94-AC-93-67-D6-8B-69-6D-15-A2-C2-45-40-98-B5-E7-64-72-38-C5-1F-6D-32-D0-5F-CB-91-20-A9-20-64-F4`

Below is an example in C# to verify webhooks:

<Tabs groupId="codeGroup">
  <TabItem value="python" label="Python">

```py reference
https://github.com/dojo-engineering/dojo-samples/blob/main/webhooks/python/verify-webhooks.py
```

  </TabItem>
  <TabItem value="C#" label="C#">

```cs reference
https://github.com/dojo-engineering/dojo-samples/blob/main/webhooks/cs/verify-webhooks.cs
```

  </TabItem>
</Tabs>

### Step 4. Go live

When you are ready to go live, switch your secret key to production one with the prefix `sk_` and check `url` that you provide.

## Available webhooks

### Payment intents webhooks

* `payment_intent.status_updated`

* `payment_intent.created`

* `payment_intent.send-receipt`

| Property | Type |Description |
|-----|-----|-----|
|`id` |string|Unique identifier for the event.|
|`event` |string|The event type. Possible values are `payment_intent.status_updated`, `payment_intent.created`, `payment_intent.send-receipt`.|
|`accountId` |string|Unique identifier for the account. |
|`createdAt` |string date-time|The timestamp of the create date, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC format.|
|`data` |object|Information regarding the payment.|
|`paymentIntentId` |string|Unique identifier for the payment intent.|
|`paymentStatus` |string|Current status of the payment intent. Possible values are `Created`, `Authorized`, `Captured`, `Reversed`, `Refunded`, `Canceled`.|
|`captureMode` |string|The type of capture for the payment. Possible values are `Auto`, `Manual`.|

```json
{
  "id": "evt_iu81D_QbLEORnzPOVkNeGA",
  "event": "payment_intent.created",
  "accountId": "acc_test",
  "createdAt": "2022-01-31T10:46:46.3202622Z",
  "data": {
    "paymentIntentId": "pi_QMzaPirE6Eudkfu_pbCE_w",
    "paymentStatus": "Created",
    "captureMode": "Auto"
  }
}
```

## Webhooks and events management

You can manage webhooks and events by using our API:

* [Retrieve a list of all events](/api#operation/Webhooks_GetAllWebhooks).
* [Retrieve a list of all subscriptions that you have](/api#operation/Webhooks_GetAlSubscriptions).
* [Create a new subscription for chosen events](/api#operation/Webhooks_Subscribe).
* [Update your subscription details](/api#operation/Webhooks_SubscribeUpdate).
* [Delete a subscription](/api#operation/Webhooks_DeleteSubscriptions).
* [Retrieve a list of secrets for the subscription](/api#operation/Webhooks_GetSecrets).
* [Generate a new secret](/api#operation/Webhooks_GenerateSecret).
* [Activate a secret](/api#operation/Webhooks_ActivateSecret).
* [Delete a secret](/api#operation/Webhooks_DeleteSecret).
