{
  "openapi": "3.0.1",
  "info_title": "Title Manager",
  "info_description": "This is a Library's TItle Manager (INT) server.",
  "info_contact_email": "test@test.com",
  "info_version": "0.0.1",
  "externalDocs_description": "Find out more about Title Manager in Wiki",
  "externalDocs_url": "https://library.test.com/docs/title",
  // "servers": [
  //   {
  //     "url": "https://stg-library.test.com/api/titles"
  //   }
  // ],
  // "tags": [
  //   {
  //     "name": "titles",
  //     "description": "Access titles",
  //     "externalDocs": {
  //       "description": "Find out more",
  //       "url": "https://confluence."
  //     }
  //   },
  //   {
  //     "name": "bulk",
  //     "description": "Bulk Access"
  //   }
  // ],
  "paths_/titles/{id}_put_tags": [
    "titles"
  ],
  "paths_/titles/{id}_put_summary": "Update an existing title by ID",
  "paths_/titles/{id}_put_operationId": "updateTitle",
  "paths_/titles/{id}_put_parameters": [
    {
      "name": "id",
      "in": "path",
      "description": "Title's unique ID (Mongo ID).",
      "required": true,
      "schema": {
        "type": "string"
      }
    }
  ],
  "paths_/titles/{id}_put_requestBody_description": "Title object that needs to be added to the db",
  "paths_/titles/{id}_put_requestBody_content_application/json_schema_$ref": "#/components/schemas/Title",
  "paths_/titles/{id}_put_requestBody_required": true,
  "paths_/titles/{id}_put_responses_200_description": "Successfully updated",
  "paths_/titles/{id}_put_responses_200_content_application/json_schema_$ref": "#/components/schemas/Title",
  "paths_/titles/{id}_put_responses_400_description": "Invalid body supplied",
  "paths_/titles/{id}_put_responses_404_description": "Title not found",
  "paths_/titles/{id}_put_security": [
    {
      "am_auth": [
        "write:titles",
        "read:titles"
      ]
    }
  ],
  "paths_/titles/{id}_put_x-codegen-request-body-name": "body",
  "paths_/titles/{id}_get_tags": [
    "titles"
  ],
  "paths_/titles/{id}_get_summary": "Finds Titles by status",
  "paths_/titles/{id}_get_description": "Multiple status values can be provided with comma separated strings",
  "paths_/titles/{id}_get_operationId": "findTitlesById",
  "paths_/titles/{id}_get_parameters": [
    {
      "name": "id",
      "in": "path",
      "description": "Title's unique ID (Mongo ID).",
      "required": true,
      "schema": {
        "type": "string"
      }
    }
  ],
  "paths_/titles/{id}_get_responses_200_description": "Successfully updated",
  "paths_/titles/{id}_get_responses_200_content_application/json_schema_$ref": "#/components/schemas/Title",
  "paths_/titles/{id}_get_responses_400_description": "Invalid ID format supplied",
  "paths_/titles/{id}_get_responses_404_description": "Title not found",
  "paths_/titles/{id}_get_security": [
    {
      "am_auth": [
        "read:titles"
      ]
    }
  ],
  "paths_/titles/{id}_delete_tags": [
    "titles"
  ],
  "paths_/titles/{id}_delete_summary": "Deletes a title",
  "paths_/titles/{id}_delete_operationId": "deleteTitle",
  "paths_/titles/{id}_delete_parameters": [
    {
      "name": "id",
      "in": "path",
      "description": "Title's unique ID (Mongo ID).",
      "required": true,
      "schema": {
        "type": "string"
      }
    }
  ],
  "paths_/titles/{id}_delete_responses_400_description": "Invalid ID supplied",
  "paths_/titles/{id}_delete_responses_404_description": "Title not found",
  "paths_/titles/{id}_delete_security": [
    {
      "am_auth": [
        "write:titles",
        "read:titles"
      ]
    }
  ],
  "paths_/titles/bulk_get_tags": [
    "bulk"
  ],
  "paths_/titles/bulk_get_summary": "Bulk Create Titles",
  "paths_/titles/bulk_get_description": "Create multiple titles in a single request.",
  "paths_/titles/bulk_get_operationId": "createBulkTitles",
  "paths_/titles/bulk_get_responses_200_description": "Successful operation",
  "paths_/titles/bulk_get_responses_200_content_application/json_schema_type": "array",
  "paths_/titles/bulk_get_responses_200_content_application/json_schema_items_$ref": "#/components/schemas/Title",
  "paths_/titles/bulk_get_responses_400_description": "Invalid title value",
  "paths_/titles/bulk_get_deprecated": false,
  "paths_/titles/bulk_get_security": [
    {
      "am_auth": [
        "write:titles",
        "read:titles"
      ]
    }
  ],
  "components_schemas_Title_required": [
    "source",
    "name"
  ],
  "components_schemas_Title_type": "object",
  "components_schemas_Title_properties_source_title": "The source of the title",
  "components_schemas_Title_properties_source_type": "string",
  "components_schemas_Title_properties_status_type": "string",
  "components_schemas_Title_properties_name_type": "string",
  "components_schemas_Title_properties_isbn_type": "string",
  "components_schemas_Title_properties_created_at_type": "string",
  "components_schemas_Title_properties_updated_at_type": "string",
  "components_schemas_Title_properties_source_id_type": "string",
  "components_schemas_Title_properties_id_type": "string",
  "components_securitySchemes_am_auth_type": "oauth2",
  "components_securitySchemes_am_auth_flows_implicit_authorizationUrl": "https://stg-library.test.com/oauth",
  "components_securitySchemes_am_auth_flows_implicit_scopes_write:titles": "modify titles in your account",
  "components_securitySchemes_am_auth_flows_implicit_scopes_read:titles": "read your titles",
  "components_securitySchemes_api_key_type": "apiKey",
  "components_securitySchemes_api_key_name": "api_key",
  "components_securitySchemes_api_key_in": "header"
}
{
  "tags": [
    "apidef"
  ]
}
