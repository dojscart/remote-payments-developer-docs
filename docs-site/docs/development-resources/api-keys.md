---
title: API keys
id: api-keys
---

>Learn how to manage your API keys.

import CardSnippet from '../snippets/_generate-keys.mdx';

The Dojo API uses [Basic HTTP auth](https://en.wikipedia.org/wiki/Basic_access_authentication), to authenticate requests you'll need to provide your API key.

## Key format

Keys are structured in a way that has semantic meaning:

* start with the prefix `sk_`

* after that, the environment prefix: `sandbox_` or `prod_`

* after that, the key content

Here is an example test key: `sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ`.

## How to use API keys

You must include your secret API key in the header of all requests, for example:

```bash reference
https://github.com/dojo-engineering/dojo-samples/blob/main/getting-started/curl/create-payment-intent.sh
```

API requests without authentication will fail.

## Create a new key

When you generate a new API key, you can use it immediately.

If your account has different locations, make sure you have selected the correct one before generating the key.

<CardSnippet />

## Delete a key

You may delete API keys at any time. The deleted key stops working immediately. Key deletion can't be undone.

To delete a key click the three dots next to your secret key (<img src="/images/dots.png" width="20"/>) and choose **Delete key**
