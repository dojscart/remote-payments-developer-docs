---
title: "Data types"
date: 2017-03-02T12:00:00-05:00
icon: "ti-panel"

---

We use a coherent format for data such as currencies, amounts and dates across all Dojo APIs.

## Currency and amount

We use the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217) for defining currencies. For examples, USD or GBP.
We express amounts in minor units according to the ISO 4217 standard. That means they're expressed in the smallest unit of currency. For example, GBP with 500 representing £5, GBP with 50 representing £0.50.

``` json
{
  "value": 500,
  "currencyCode": "GBP"
}
```

## Date and time

Date and time are expressed according to the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) standard with combined date, time and timezone. For example, `2021-05-12T07:45:00Z` representing the 12th of May 2021 at 07:45:00 and the UTC timezone.
The exception to this are `expiryDate` fields where we accept values in the MM/YY format.

``` json
{
    "transactionDateTime": "2021-05-12T07:45:00Z",
    "expiryDate": "04/21"

}
```

## Country

Countries are handled as two-letter country codes according to [ISO 3166-1-alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). For example, GB for the Great Britain.

``` json
{
    "countryCode": "GB"
}
```
