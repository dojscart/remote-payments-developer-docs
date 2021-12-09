# Introduction

The Dojo API is RESTful. It returns HTTP response codes to indicate errors. It also
accepts and returns JSON in the HTTP body.

## Authentication

## HTTP Responses

The API returns HTTP responses on each request to indicate the success or otherwise of API requests. The various HTTP status codes we might return are listed below.

| Code  | Title | Description |
|---------|----------------|----------------|
|200| OK | The request was successful. |
|400| Bad request | Bad request, probably due to a syntax error. |
|401| Unauthorized | Authentication required. |
|402| Request Failed | Over plan quota on this endpoint. |
|404| Not found | The resource doesn't exist. |
|405| Method Not Allowed| The used request method isn't supported by that resource, for example using a POST on a resource that requires a GET.
|409| Conflict | The request couldn't be completed because it conflicted with another request or the server's configuration. |
|50X| Internal Server Error | An error occurred with our API.|

## Errors

Dojo follows the error response format proposed in [RFC 7807](https://tools.ietf.org/html/rfc7807) also known as Problem Details for HTTP APIs. All errors are returned in the form of JSON.

### Error Schema

In case of an error, the response object contains the following fields:

| Field | Type| Required| Description |
|---------|----------------|----------------|---------------|
|errors| Object || Returns an explanation of errors.|
|type| String || Returns the type of error that was encountered.|
|title| String|| Returns a short summary of errors. |
|status| Integer | | Returns the HTTP status code.|
|traceId| String ||The unique identifier of the failing request.|

The following example shows a possible error response:

``` json
{
    "errors": {
        "Reference": [
            "The Reference field is required."
        ]
    },
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
    "title": "One or more validation errors occurred.",
    "status": 400,
    "traceId": "00-a405f077df056a498323ffbcec05923f-aa63e6f4dbbc734a-01"
}
```

## Versioning

Dojo API uses the YYYY-MM-DD API version-naming scheme. You have to pass the version as the `version` header in all API calls.

When we make [breaking changes](../development-resources/versioning-overview/#breaking-changes) to the API, we release new dated versions.

The current version is 2021-10-22. Check the last updates out in the [changelog](../development-resources/versioning-overview/#changelog).

## Postman collection

You can run the API collection in Postman:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/16735701-7fe64908-9da4-4c17-b78d-80a1f41b4295?action=collection%2Ffork&collection-url=entityId%3D16735701-7fe64908-9da4-4c17-b78d-80a1f41b4295%26entityType%3Dcollection%26workspaceId%3Dfdd152df-0154-428c-aeb4-1b90e46b8523)