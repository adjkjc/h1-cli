# Pobieranie Dysku
  
## Wprowadzenie

Dokument wyjaśnia w jaki sposób pobrać [Dysk](/resource/storage/disk.md).

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* pobrania dysku wymaga spełnienia [warunków pobrania dysku](/resource/storage/disk.md#pobranie-dysku)

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
      "label": "Dyski"
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
      "label": "Pobierz"
    },
    "after_event": "Po kliknięciu rozpocznie się pobieranie."
  }
]
```

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 disk download --disk my-disk
```
gdzie:

 * ```--disk``` określa nazwę lub identyfikator dysku

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="disk download"].