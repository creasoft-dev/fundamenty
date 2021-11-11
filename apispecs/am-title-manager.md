---
title: Title Manager v0.0.1
language_tabs: []
toc_footers:
  - <a href="https://library.test.com/docs/title">Find out more about Title
    Manager in Wiki</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="title-manager">Title Manager v0.0.1</h1>

> Scroll down for example requests and responses.

This is a Library's TItle Manager (INT) server.

Base URLs:

* <a href="https://stg-library.test.com/api/titles">https://stg-library.test.com/api/titles</a>

Email: <a href="mailto:test@test.com">Support</a> 

# Authentication

- oAuth2 authentication. 

    - Flow: implicit
    - Authorization URL = [https://stg-library.test.com/oauth](https://stg-library.test.com/oauth)

|Scope|Scope Description|
|---|---|
|write:titles|modify titles in your account|
|read:titles|read your titles|

* API Key (api_key)
    - Parameter Name: **api_key**, in: header. 

<h1 id="title-manager-titles">titles</h1>

Access titles

<a href="https://confluence.">Find out more</a>

## updateTitle

<a id="opIdupdateTitle"></a>

`PUT /titles/{id}`

*Update an existing title by ID*

> Body parameter

```json
{
  "source": "string",
  "status": "string",
  "name": "string",
  "isbn": "string",
  "created_at": "string",
  "updated_at": "string",
  "source_id": "string",
  "id": "string"
}
```

<h3 id="updatetitle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Title's unique ID (Mongo ID).|
|body|body|[Title](#schematitle)|true|Title object that needs to be added to the db|

> Example responses

> 200 Response

```json
{
  "source": "string",
  "status": "string",
  "name": "string",
  "isbn": "string",
  "created_at": "string",
  "updated_at": "string",
  "source_id": "string",
  "id": "string"
}
```

<h3 id="updatetitle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successfully updated|[Title](#schematitle)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid body supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Title not found|None|

<h3 id="updatetitle-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
am_auth ( Scopes: write:titles read:titles )
</aside>

## findTitlesById

<a id="opIdfindTitlesById"></a>

`GET /titles/{id}`

*Finds Titles by status*

Multiple status values can be provided with comma separated strings

<h3 id="findtitlesbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Title's unique ID (Mongo ID).|

> Example responses

> 200 Response

```json
{
  "source": "string",
  "status": "string",
  "name": "string",
  "isbn": "string",
  "created_at": "string",
  "updated_at": "string",
  "source_id": "string",
  "id": "string"
}
```

<h3 id="findtitlesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successfully updated|[Title](#schematitle)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID format supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Title not found|None|

<h3 id="findtitlesbyid-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
am_auth ( Scopes: read:titles )
</aside>

## deleteTitle

<a id="opIddeleteTitle"></a>

`DELETE /titles/{id}`

*Deletes a title*

<h3 id="deletetitle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Title's unique ID (Mongo ID).|

> Example responses

<h3 id="deletetitle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Title not found|None|

<h3 id="deletetitle-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
am_auth ( Scopes: write:titles read:titles )
</aside>

<h1 id="title-manager-bulk">bulk</h1>

Bulk Access

## createBulkTitles

<a id="opIdcreateBulkTitles"></a>

`GET /titles/bulk`

*Bulk Create Titles*

Create multiple titles in a single request.

> Example responses

> 200 Response

```json
[
  {
    "source": "string",
    "status": "string",
    "name": "string",
    "isbn": "string",
    "created_at": "string",
    "updated_at": "string",
    "source_id": "string",
    "id": "string"
  }
]
```

<h3 id="createbulktitles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid title value|None|

<h3 id="createbulktitles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Title](#schematitle)]|false|none|none|
|» source|string|true|none|none|
|» status|string|false|none|none|
|» name|string|true|none|none|
|» isbn|string|false|none|none|
|» created_at|string|false|none|none|
|» updated_at|string|false|none|none|
|» source_id|string|false|none|none|
|» id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
am_auth ( Scopes: write:titles read:titles )
</aside>

# Schemas

<h2 id="tocS_Title">Title</h2>
<!-- backwards compatibility -->
<a id="schematitle"></a>
<a id="schema_Title"></a>
<a id="tocStitle"></a>
<a id="tocstitle"></a>

```json
{
  "source": "string",
  "status": "string",
  "name": "string",
  "isbn": "string",
  "created_at": "string",
  "updated_at": "string",
  "source_id": "string",
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string|true|none|none|
|status|string|false|none|none|
|name|string|true|none|none|
|isbn|string|false|none|none|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|
|source_id|string|false|none|none|
|id|string|false|none|none|

