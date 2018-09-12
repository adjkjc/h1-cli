# Odczytanie Dziennika

## Wprowadzenie

Dokument wyjaśnia w jaki sposób odczytać [Dziennik](/resource/storage/log-archive.md).

## Warunki wstępne

* wszystkie warunki wykonania operacji [Odczytania](/resource/storage/log-archive.md#odczytanie).

## Instrukcja

### Panel

W celu odczytania *Dziennika* poprzez panel wykonaj następujące kroki:

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "Dzienniki"
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_resource",
      "selector": "navbar>.vm"
    },
    "after_event": "Po kliknięciu pojawią szczegóły zasobu."
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
      "label": "Strumień"
    }
  }
]
```