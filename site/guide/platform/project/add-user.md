# Dodanie Użytkownika do Projektu

## Wprowadzenie

Dokument wyjaśnia w jaki sposób dodać *[Użytkownika](/platform/user.md)* do [Projektu](/platform/project.md) co umożliwia zarządzanie lub dostęp do informacji o *Projekcie*.

## Instrukcja

### Panel

W celu wykonania operacji z wykorzystaniem panelu wykonaj następujące kroki:

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "Projekty"
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_resource",
      "selector": "navbar>.vm"
    },
    "after_event": "Po kliknięciu pojawi się strona ze szczegółami *Zasobu*."
  },
  {
    "action_name": "click",
    "data": {
      "type": "tab",
      "selector": "navbar>.vm",
      "label": "Członkowie"
    },
    "after_event": "Po kliknięciu pojawi się lista członków."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label":"Nadaj dostęp"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Użytkownik",
          "type": "text",
          "value": "user@example.com"
        },
        {
          "name": "Rola",
          "type": "choose",
          "value": "owner"
        }
      ],
      "defined_all": true
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label":"Nadaj"
    }
  }    
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 project access grant --project MyProject --email user@example.com
```

gdzie:

 * ```--project``` określa nazwę lub identyfikator *Projektu*
 * ```--email``` określa adres e-mail *Użytkownika*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="project access grant"].