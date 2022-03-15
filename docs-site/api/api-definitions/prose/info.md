# Introduction

The Dojo API is RESTful. It returns HTTP response codes to indicate errors. It also
accepts and returns JSON in the HTTP body.

## Base URLs

Use the following base URL when making requests to the API:  https://api.dojo.tech/

## Looking for no-code solutions?

Try one of our [pre-builded solutions](../docs/plugins/) for your site.

# Authentication

The Dojo API uses [Basic HTTP auth](https://en.wikipedia.org/wiki/Basic_access_authentication). To generate your API keys, send a request to our [support team](https://support.dojo.tech/hc/en-gb/requests/new).
Secret keys for the test environment have the prefix `sk_test_` and for production have the prefix `sk_`.

You must include your secret API key in the header of all requests, for example:

```curl
curl
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_your_key' \
...
    
```

API requests without authentication will fail.

<SecurityDefinitions />

# HTTP Responses

The API returns HTTP responses on each request to indicate the success or otherwise of API requests. The various HTTP status codes we might return are listed below.

| Code  | Title | Description |
|-----|-----|-----|
|`200`|`OK`| The request was successful. |
|`400`|`Bad Request`| Bad request, probably due to a syntax error. |
|`401`|`Unauthorized`| Authentication required. |
|`402`|`Request Failed`| Over plan quota on this endpoint. |
|`404`|`Not Found`| The resource doesn't exist. |
|`405`|`Method Not Allowed`| The used request method isn't supported by that resource, for example using a POST on a resource that requires a GET.
|`409`|`Conflict`| The request couldn't be completed because it conflicted with another request or the server's configuration. |
|`50X`|`Internal Server Error`| An error occurred with our API.|

# Errors

Dojo follows the error response format proposed in [RFC 7807](https://tools.ietf.org/html/rfc7807) also known as Problem Details for HTTP APIs. All errors are returned in the form of JSON.

## Error Schema

In case of an error, the response object contains the following fields:

| Field | Type|  Description |
|-----|-----|-----|
|`errors`|`object`| A human-readable explanation of errors.|
|`type`|`string`| A URI reference [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) that identifies the problem type.|
|`title`|`string`| A short, human-readable summary of the error. |
|`status`|`integer`| The [HTTP status code](#section/HTTP-Responses). |
|`traceId`|`string`| The unique identifier of the failing request.|
|`detail`|`string`| A human-readable message giving more details about the error. Not always present.|

The following example shows a possible error response:

```json
{
    "errors": {
        "Reference": [
            "The Reference field is required."
        ]
    },
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
    "title": "One or more validation errors occurred.",
    "status": 400,
    "traceId": "00-a405f077df056a498323ffbcec05923f-aa63e6f4dbbc734a-01",
    
}
```

# Versioning

Dojo API uses the YYYY-MM-DD API version-naming scheme. You have to pass the version as the `version` header in all API calls, for example:

``` curl
curl
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_your_key' \
  --header 'version: 2022-01-03' \
    
```

When we make [breaking changes](../docs/Development%20resources/versioning-overview#breaking-changes) to the API, we release new dated versions.

The current version is 2022–01–03. Check the last updates out in the changelog.

# Postman collection

You can run the API collection in Postman:

 [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/16735701-a83d1d8b-2a32-4af7-a487-60b974f0c47e?action=collection%2Ffork&collection-url=entityId%3D16735701-a83d1d8b-2a32-4af7-a487-60b974f0c47e%26entityType%3Dcollection%26workspaceId%3Dfdd152df-0154-428c-aeb4-1b90e46b8523)