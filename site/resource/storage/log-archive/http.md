# API HTTP Dziennika

## Podstawowe informacje

W ramach platform dla zasobu Dziennika udostępnione są dwa odrębne API:

* HTTP REST API zasobu przeznaczone do wprowadzenia danych do dziennika
* HTTP REST API platformy przeznaczone do zarządzania usługą i odczytu danych

W niniejszym dokumencie przedstawione jest wykorzystanie HTTP API do pierwszego z przedstawionych zastosowań.

Interfejs API akceptuje treść JSON  w żądaniach i zwraca treść JSON we wszystkich swoich odpowiedziach, w tym błędy. Tylko kodowanie znaków UTF-8 jest obsługiwane zarówno w przypadku żądań, jak i odpowiedzi.

## Uwierzytelnianie

W celu poprawnego uwierzytelnienia należy przesłać nagłówek:

```
X-Auth-Password: {{password}}
```

W przykładzie należy wykorzystać poprawne [dane dostępowe zasobu](../log-archive.md#Dostęp).

## Specyfikacja OpenAPI

```yaml
openapi: 3.0.0

info:
  version: 1.0.0
  title: RBX-API
servers:
  - url: http://{log_id}.log.pl-waw-1.hyperone.com/
    variables:
      logId:
        description: The id of the logArchive to write
        default: logId
paths:
  /event:
    post:
      summary: Add log events to a specific logArchive
      tags:
        - events
      parameters:
        - name: logId
          in: path
          required: true
          description: The id of the log to retrieve
          schema:
            type: string
      requestBody:
        description: Optional description in *Markdown*
        required: true
        content:
          application/json:
            schema:
              oneOf:
                - $ref: '#/components/schemas/Event'
                - $ref: '#/components/schemas/Events'
      responses:
        '202':
          description: Response properly received.
components:
  schemas:
    Event:
      type: object
      additionalProperties: true
      required:
        - host
        - message
      properties:
        pri:
          type: string
        prival:
          type: number
        facilityval:
          type: number
        levelval:
          type: number
        facility:
          type: string
        level:
          type: string
        version:
          type: string
        ts:
          type: string
        host:
          type: string
        appName:
          type: string
        pid:
          type: string
        messageid:
          type: string
        message:
          type: string
        chain:
          type: array
          items:
            type: string
        structuredData:
          type: array
          items:
            type: string
        fields:
          type: array
          items:
            type: string
    Events:
      type: array
      items:
        $ref: "#/components/schemas/Event"
  securitySchemes:
    PasswordAuth:
      type: apiKey
      in: header
      name: x-auth-password
security:
  - PasswordAuth: []
```



