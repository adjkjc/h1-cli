# Zaakceptowanie transferu *Projektu* do *Organizacji*

## Wprowadzenie

Dokument wyjaśnia w jaki sposób zaakceptować transfer *Projektu* z źródłowej *[Organizacji](/platform/organization.md)* do docelowej *Organizacji*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* transfer *Projektu* został zainicjowany, [zgodnie z instrukcją](/guide/platform/project/transfer-init.md)
* *Organizacja* posiada *Płatność* niewykorzystaną na rzecz żadnego *Projektu*, utworzoną [zgodnie z instrukcją](/guide/platform/organization/payment-create.md)
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
      "label": "Transfery"
    },
    "after_event": "Po kliknięciu pojawi się lista *Projektów*."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_tridot"
    },
    "after_event": "Po kliknięciu pojawi się lista rozwijana."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "selector": "navbar>.vm",
      "label": "Zaakceptuj"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Płatność",
          "type": "choose",
          "value": "2018-12-11 ..."
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
      "label": "Zaakceptuj"
    }
  }
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 organisation transfer accept --organisation MyOrganisation --project AcceptedProject --payment 583867ca5452f7020e63b4c6 
```

gdzie:

 * ```--organisation``` określa nazwę lub identyfikator docelowej *Organizacji*
 * ```--project``` określa identyfikator lub nazwa *Projektu* przekazywanego
 * ```--payment``` określa pierwszą *Płatność* *Projektu*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="organisation transfer accept"].