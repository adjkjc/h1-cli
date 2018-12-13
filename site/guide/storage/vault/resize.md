# Zwiększenie rozmiaru Vault

## Wprowadzenie

Dokument wyjaśnia w jaki sposób zwiększyć rozmiar [Vault](/resource/storage/vault.md).

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie [warunki zwiększenia rozmiaru *Vault*](/resource/storage/vault.md#zwiekszenie-rozmiaru)

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
      "label": "Vault"
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
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Akcje"
    },
    "after_event": "Po kliknięciu pojawi się lista rozwijana."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Zmień Rozmiar"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Nowy rozmiar Vault",
          "type": "text",
          "value": "25"
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
      "label":"Utwórz"
    }
  }  
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vault resize --vault my-vault --size 25
```

gdzie:

 * ```--vault``` określa nazwę lub identyfikator *Vault*
 * ```--size``` określa nowy rozmiar *Vault*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vault resize"].