# Zainicjowanie transferu *Projektu*

## Wprowadzenie

Dokument wyjaśnia w jaki sposób zainicjować transfer *Projektu* z źródłowej *[Organizacji](/platform/organization.md)* do docelowej *Organizacji*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* zainicjowanie transferu *Projektu* wymaga spełnienia [warunków operacji przekazania *Projektu*](/platform/project.md#przekazanie)

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
      "label": "Organizacje"
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_resource"
    },
    "after_event": "Po kliknięciu zostanie otwarta strona z szczegółami *Zasobu*."
  },
  {
    "action_name": "click",
    "data": {
      "type": "tab",
      "selector": "navbar>.vm",
      "label": "Projekty"
    },
    "after_event": "Po kliknięciu pojawi się lista *Projektów*."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_resource"
    },
    "after_event": "Po kliknięciu zostanie otwarta strona z szczegółami *Zasobu*."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Akcje"
    },
    "after_event": "Po kliknięciu pojawi się lista rozwijana."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "selector": "navbar>.vm",
      "label": "Przekaż"
    }
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Organizacja",
          "type": "choose",
          "value": "DocelowaOrganizacja"
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
      "label": "Przekaż"
    }
  }
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 project transfer --project test-project --organisation target-organisation
```

gdzie:

 * ```--project``` określa identyfikator lub nazwa *Projektu* przekazywanego
 * ```--organisation``` określa identyfikator lub nazwę docelowej *Organizacji*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="project transfer"].