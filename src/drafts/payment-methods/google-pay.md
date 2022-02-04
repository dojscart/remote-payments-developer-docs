---
title: "Google Pay"
weight: 3

---

{{< lead >}}Google Pay provides a fast, simple and secure way to pay using the cards saved on Google accounts.{{< /lead >}}

You can accept Google Pay payments on your site using the [Online checkout](/accept-payments/online-checkout/). Using Google Pay in the Online checkout requires to add Wallet.

**Supported Card Networks:**

* Discover
* Mastercard
* Visa

If you already add [Apple Pay](/payment-methods/apple-pay), Google Pay will work automatically. (???)

## Try it out

You can find a complete example of the Google Pay code in [GitHub](link).

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="js,result" data-user="myafka" data-slug-hash="NWapZbz" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/myafka/pen/NWapZbz"></a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Testing Google Pay

The Google Pay [Test Card Suite](https://developers.google.com/pay/api/android/guides/resources/test-card-suite) allows you to test Google Pay without the need of adding real cards to Google accounts.

To instantly view these cards in your Google Account TEST environment, join [Google's User Group](https://groups.google.com/g/googlepay-test-mode-stub-data) and all test cards will be automatically added to your account so you do not need to add them manually.

You are free to leave or join [Google's Test Card Suite Group](https://groups.google.com/g/googlepay-test-mode-stub-data) as needed. To leave, select My membership settings and click Leave group.

Developers must use real cards in a PRODUCTION environment.

The test card suite is only intended for use in TEST environments, it will be automatically detected and shown when accessing a TEST environment and hidden when you are accessing a PROCUTION environment.

It means that you can use your real Google account to join the test card suite, but we recommend to use a Google account used to run integration tests.

## Optional Google Pay configuration

## Terms and Conditions

By integrating Google Pay, you adhere to the [Google Pay APIs Acceptable Use Policy](https://payments.developers.google.com/terms/aup) and accept the terms defined in the [Google Pay API Terms of Service](https://payments.developers.google.com/terms/sellertos).

## Learn more

You can find more information in the official Google documentation:

* [Google Pay Web Brand Guidelines](https://developers.google.com/pay/api/web/guides/brand-guidelines)

* [Google Pay Web Developer Documentation](https://developers.google.com/pay/api/web/overview)

* [Google Pay Web Integration Checklist](https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist)