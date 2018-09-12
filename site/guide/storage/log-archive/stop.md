# Wyłączenie Dziennika

## Wprowadzenie

Dokument wyjaśnia w jaki sposób wyłączyć [Dziennik](/resource/storage/log-archive.md).

## Warunki wstępne

* wszystkie warunki wykonania operacji [Wyłączenia](/resource/storage/log-archive.md#wylaczenie).

## Instrukcja

### Panel

W celu wyłączenia *Dziennika* poprzez panel wykonaj następujące kroki:

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
      "label": "Wyłaczenie"
    }
  }
]
```