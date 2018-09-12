# Zastąpienie adresu IP w Adapterze sieciowym

## Wprowadzenie

Dokument wyjaśnia w jaki sposób zastąpić *[Adres IP](/resource/networking/ip-address.md)* w *[Adapterze sieciowym](/resource/networking/network-adapter.md)*.

## Warunki wstępne

* zastąpienie adresu IP wymaga spełnienia [warunków operacji zastąpienia adresu IP](/resource/networking/network-adapter.md#zastapienie-adresu-ip)

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
      "label": "Wirtualna maszyna"
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_resource"
    },
    "after_event": "Po kliknięciu zostanie otwarta strona z szczegółami zasobu."
  },
  {
    "action_name": "click",
    "data": {
      "type": "tab",
      "selector": "navbar>.vm",
      "label": "Adaptery sieciowe"
    },
    "after_event": "Po kliknięciu pojawi się lista adapterów sieciowych."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_resource"
    },
    "after_event": "Po kliknięciu zostanie otwarta strona z szczegółami zasobu."
  },
  {
    "action_name": "click",
    "data": {
      "type": "tridot",
      "location":"label",
      "label":"Adres IP",
      "selector": "navbar>.vm"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Nowy trwały adres IP",
          "type": "choose",
          "value": "62.181.8.187"
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
      "label": "Przyłacz"
    }
  }
]
```