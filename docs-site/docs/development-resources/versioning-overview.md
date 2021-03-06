---
title: "Versioning"
weight: 1

---

Dojo API uses the YYYY-MM-DD API version scheme. You have to pass the version as the `version` header in all API calls.

When you make the first API request, use current data as a version to get the latest available version.

The current version is `2022-04-07`.

## Breaking changes

Breaking or backwards-incompatible changes include:

- Changing the URL format.
- Changing parameters from non-mandatory to mandatory.
- Changing the type of a parameter.
- Changing authentication mechanism.
- Adding new mandatory request parameters to existing API methods.
- Removing or renaming a resource, field, method or an enum value.

If we make breaking changes to the API, we release new, dated versions. We don't change your version, if you want to use a new version you have to change the version yourself.

## Non-breaking changes

The following types of changes don't qualify as breaking changes, this list isn't exhaustive:

- Adding new HTTP headers.
- Adding new values to an enum if there is a default defined.
- Adding new HTTP methods to existing resources.
- Adding new non-mandatory request or response parameters to existing API methods.
- Changing parameters from mandatory to non-mandatory.

## How to upgrade API

When we release a new API version, you can choose to upgrade to gain access to new features. To change the API version you need to change the `version` header.

When non-breaking changes are implemented into the current API version, these features will become available without needing an upgrade.
