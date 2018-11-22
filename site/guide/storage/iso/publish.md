# Opublikowanie ISO

## Wprowadzenie

Dokument wyjaśnia w jaki sposób opublikować [ISO](/resource/storage/iso.md) dla wszystkich użytkowników platformy.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Opublikowanie](/resource/storage/iso.md#opublikowanie)

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
      "label": "ISO"
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
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Publiczny"
    }
  }
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 iso access grant --iso test-image --project '*'
```

gdzie:

 * ```--iso``` określa nazwę lub identyfikator publikowanego *ISO*
 * ```--project '*'``` określa, że publikacja następuje dla wszystkich użytkowników platformy

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="iso access grant"].
