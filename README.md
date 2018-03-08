# Another Content Access API - Get started

## Introduction

The Content Access API is the principal way to interact with your datas. All the other APIs are extensions of this one, so be sure to understand how it works!

This API has been built on top of the powerful[ FeathersJs API](https://feathersjs.com/). if you don't know it, I suggest you take a look at it. It's wonderful.

## Requests

The base address of the API is `https://yourdomain.com/api/access`

The API attempt to conform to the REST principles. It means that the data will be accessible with an HTTPS requests \(in UTF-8 format\) to a defined endpoint.

As a reminder, this table enumerates the HTTP methods used for the requests:

| Methods | Utility |
| :--- | :--- |
| POST \(Create\) | Creating new resources |
| GET \(Read\) | Read some resources |
| PUT \(Update/Replace\) | Replace resources |
| PATCH \(Update/Modify\) | Merge resources |
| DELETE \(Delete\) | Delete resrouces |

## Response format

Actually, the only format supported by the API is JSON. Also note that all requests must also be done using this format as well as an UTF-8 encoding.

