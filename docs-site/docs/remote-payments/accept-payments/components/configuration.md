---
title: Configure Dojo Components
sidebar_position: 3
---

## Dojo Card

```const card = new new Dojo.Payment(config, displayErrorsCallback, onSubmitTriggered, onBlur);```

| Parameter | Type | Description |
|-----|-----|-----|
|`config` |object [Config](#config)|Required. Config containing details of this payment and the styling of the payment form. |
|`displayErrorsCallback` |function| An optional callback to display text [validation errors](#validation-error). The supplied function is called when there is a validation state change. This function is passed an array of validationError objects.|
|`onSubmitTriggered` | function|An optional callback that is called when the submit event on the payment form is fired. This allows the payment to be submitted or extra validation done when the user presses the enter key on the payment form.|
|`onBlur` |function(isValid: boolean)| An optional callback that is called when focus is lost from any field in the form. The parameter isValid will be true when all fields are completed and there are no validation errors.|

## Dojo Wallet

```const wallet = new Dojo.WalletPayment(config, displayErrorsCallback, paymentComplete);```

| Parameter | Type | Description |
|-----|-----|-----|
|`config` |object [Config](#config)|Required. Config containing details of this payment and the styling of the payment button. |
|`displayErrorsCallback` |function| An optional callback to display text [validation errors](#validation-error). The supplied function is called when there is a validation state change. This function is passed an array of validationError objects.|
|`paymentComplete` | function|A callback that returns the result of payment. The supplied function is called when the payment is executed. This function is passed a [Transaction Result](#transaction-result) object.|

## Config

| Property| Type |Description |Card Component| Wallet Component|
|-----|-----|-----|-----|-----|
|`containerId` | string |Required. The id of the div element where the payment details will be displayed.|✓|✓|
|`paymentDetails` |[paymentDetails](#payment-details) |Required. Details of the payment to be made.|✓|✓|
|`fontCss` |array of strings| Array of urls pointing to css files for importing fonts. e.g. `https://fonts.googleapis.com/css?family=Do+Hyeon`|✓|-|
|`styles` |[stylesConfig](#styles-config)| Object defining custom styles for the payment form.|✓|-|
|`text` |[textConfig](#text-config)| Object defining text to override the defaults.|✓|-|
|`onIframeLoaded` |function| An optional function that is called once the iframe has been loaded and configured.|✓|✓|
|`onIframeLoadFailed` |function| An optional function that is called if there is an error loading the iframe.|✓|✓|
|`errorMessages` |[errorMessages](#error-messages)| Object defining custom validation error messages for the payment form.|✓|✓|
|`callbacks` |[callbacksConfig](#card-callbacks-config)| Object defining callback functions on various events.|✓|-|
|`callbacks` |[walletPaymentCallbacksConfig](#wallet-callbacks-config)| Object defining callback functions on various events.|-|✓|
|`buttonConfig` |[buttonConfig](#button-config)| An optional button config. It defaults to colour black and type plain.|-|✓|
|`emailRequired` |boolean| An optional config to collect the buyer's email. It defaults to false.|-|✓|
|`billingAddressRequired` |boolean| An optional config to collect the buyer's billing address. It defaults to false.|-|✓|
|`shippingAddressRequired` |boolean| An optional config to collect the buyer's shipping address. It defaults to false.|-|✓|

### Payment Details

| Property| Type |Description |
|-----|-----|-----|
|`paymentToken` | string | Required. The access token supplied by the get access token API.|

### Styles Config

| Property| Type |Description |
|-----|-----|-----|
|`base` | [fieldStyle](#field-style) |Required. Styles to be applied to all fields. |
|`cv2` | [fieldStyle](#field-style)|Styles to override the base styles for the cv2 field.|
|`cardNumber` |[fieldStyle](#field-style)| Styles to override the base styles for the card number field.|
|`expiryDate` |[fieldStyle](#field-style)| Styles to override the base styles for the expiry date field.|
|`cardName` |[fieldStyle](#field-style)| Styles to override the base styles for the card name field.|
|`cardIcon` |[JavaScript CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)| Styles to be applied to the card icon.|
|`form` |[JavaScript CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) | Styles to be applied HTML form element containing all the fields.|

#### Field Style

| Property| Type |Description |
|-----|-----|-----|
|`default` | [JavaScript CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)  |Styles to be applied when the field is in its initial state. |
|`focus` | [JavaScript CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) |Styles to be applied when the field has focus.|
|`error` |[JavaScript CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)| Styles to be applied when the field has failed validation.|
|`valid` |[JavaScript CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)| Styles to be applied when the field has passed validation.|
|`errorFocus` |[JavaScript CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)| Styles to be applied when the field has focus and is in an error state.|
|`validFocus` |[JavaScript CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) | Styles to be applied when the field has focus and is valid.|
|`container` |[JavaScript CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) | Styles to be applied to the div wrapping the label and the input field.
|`label` |[JavaScript CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) | Styles to be applied to the label.|
|`validationText` |[JavaScript CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) | Styles to be applied to the validation message. Only applicable if `text.(cardName|cardNumber|expiryDate|cv2).showValidation` is `true`.|
|`validationIcon` |[JavaScript CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) | Styles to be applied to the validation message icon. Only applicable if `text.(cardName|cardNumber|expiryDate|cv2).showValidation` is `true`. E.g., to set the icon colour to purple set this property to `{ backgroundColor: 'purple' }`|

### Text Config

| Property | Type |Description |
|-----|-----|-----|
|`cardName` |[fieldText](#field-text)|Config to override the default card name placeholder and label text.|
|`cardNumber` |[fieldText](#field-text)|Config to override the default card number placeholder and label text.|
|`expiryDate` |[fieldText](#field-text)|Config to override the default cv2 placeholder and label text.|
|`cv2` |[fieldText](#field-text)|Config to override the default expiry date placeholder and label text.|

#### Field Text

| Property | Type |Description |
|-----|-----|-----|
|`label` |string|Required. Text to replace the default label text. |
|`placeholder` |string|Required. Text to replace the default placeholder text. (Empty will be ignored)|
|`showValidation` |boolean|Option to show the validation message. Defaults to false if not set.|

### Button Config

| Property | Type |Description |
|-----|-----|-----|
|`colour` |string|It defaults to black, but it can optionally be changed to white. |
|`type` |string|It defaults to plain (payment button without additional text), but it can optionally be changed to book (Book with GooglePay/ApplePay), buy, checkout, donate or order.|

### Error Messages

This allows overriding of the default error messages. This will override both the messages passed to displayErrorsCallback and the message displayed if showValidation is set to true.

| Property | Type |Description |
|-----|-----|-----|
|`cardNameRequired` |string|Error returned if card name isn't entered. |
|`cardNameInvalid`  |string| Error returned if invalid card name is entered.|
|`cardNumberRequired`  |string| Error returned if card number isn't entered.|
|`cardNumberInvalid`  |string| Error returned if invalid card number is entered.|
|`expiryDateRequired`  |string| Error returned if card expiry date isn't entered.|
|`expiryDateInvalid`  |string| Error returned if invalid card expiry date is entered.|
|`expiryDateMustBeInFuture`  |string| Error returned if card expiry date isn't in the future.|
|`cv2Required`  |string| Error returned if CV2 isn't entered.|
|`cv2Invalid`  |string| Error returned if invalid CV2 is entered.|

### Card Callbacks Config

| Property | Type |Description |
|-----|-----|-----|
|`onFormComplete` |function|An optional function that's called once the form is complete and all input values are valid. |
|`onFormFieldValid` |function(fieldName: string)| An optional function that's called once a form field input is valid.|

### Wallet Callbacks Config

| Property | Type |Description |
|-----|-----|-----|
|`onPaymentCancelled` |function|An optional function that's called if the user closes the wallet payment form without paying.|
|`onPaymentInitiated` |function| An optional function that's called when the wallet payment button is clicked.|

## Validation Error

| Property | Type |Description |
|-----|-----|-----|
|`errorType` |string|The type of validation error that has occured. For the card component this can be one of the following: `cardNameRequired`, `cardNameInvalid`, `cardNumberRequired`, `cardNumberInvalid`, `expiryDateRequired`, `expiryDateInvalid`, `expiryDateMustBeInFuture`, `cv2Required`, `cv2Invalid` |
|`message`  |string| Message detailing the validation error for displaying to the user.|

## Execute Payment

```js

card.executePayment(additionalInfo)
    .then(function(data){
        /*handle response here*/
    }).catch(function(data){
        /*handle failure here*/
    }

```

When the promise is fulfilled the following object will be passed.

## Transaction Result

| Property | Type |Description |
|-----|-----|-----|
|`statusCode` |[statusCode](#status-code)|Indicated the status of the transaction. 0 for a successful transaction.|
|`authCode` |string| If the transaction was successful, then the auth code is passed out here.|
|`message` |string| This gives a more detailed description of the status of the transaction.|

### Status Code

| Status Code | Result |Description |
|-----|-----|-----|
|`0` |Successful|The transaction was successful.|
|`3` |Authorizing| The card holder has not completed 3DS, this status will only be seen on the REST API.|
|`4` |Referred| The card issuer has parked the transaction awaiting contact with the customer before proceeding to authorise or decline the transaction.|
|`5` |Declined| The transaction was declined by the card issuer or acquiring bank.|
|`20` |Duplicate Transaction| The transaction which was processed was a duplicate. Ensure each transaction has a unique OrderId.|
|`30` |Failed| Error executing transaction.|
|`400` |Invalid Request| The request has failed validation by our servers and the transaction has not been submitted to the gateway. Possible causes for this are invalid transaction type or other data in the request.|
|`401` |Issue with Access Token| The access token being used is not valid, the transaction has not been submitted to the gateway. This can be caused if the token has already been used or the 30 minute expiry time has elapsed.|
|`404` |No Access Token Supplied| No access token has been supplied to Connect-E. Transaction has not been submitted to the gateway.|
|`500` |Internal Server Error| There's been an error submitting the transaction, please check the REST API for the status of the transaction.|

## Additional Info

The user's email address and billing address can be passed as the optional additionalInfo object as defined below. These values will override those set when the access token was created.

| Property | Type |Description |
|-----|-----|-----|
|`userEmailAddress` |string|This email will be checked with the card issuer to provide additional security.|
|`userPhoneNumber` |string|The cardholder's phone number.|
|`billingAddress` |[address](#address)|This address will be checked with the card issuer to provide additional security.|
|`shippingDetails` |[shippingDetails](#shippingdetails)|Shipping details for the order.|
|`metaData` |Map<string, string>|Meta data to be passed at execution time. This will be merged into MetaData passed via the REST API. This can be represented as a JSON object with only string values, other types are not supported.|

## ShippingDetails

| Property | Type |Description |
|-----|-----|-----|
|`name` |string|Name order is being shipped to.|
|`address` |[address](#address)|Address order is being shipped to.|

## Address

| Property | Type |Description |
|-----|-----|-----|
|`address1` |string|Customer’s billing address line 1.|
|`address2` |string|Customer’s billing address line 2.|
|`address3` |string|Customer’s billing address line 3.|
|`address4` |string|Customer’s billing address line 4.|
|`city` |string|Customer’s billing address city.|
|`state` |string|Customer’s billing address state or county.|
|`postcode` |string|Customer’s billing address postcode or zipcode.|
|`countryCode` |string|Customer’s billing address country code using ISO 3166-1 e.g. United Kingdom: 826.|
