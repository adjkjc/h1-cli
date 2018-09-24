# Usuwanie Obrazu

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć *[Obraz](/resource/storage/image.md)*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie [warunki usuwania *ISO*](/resource/storage/iso.md#usuwanie)

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
      "label": "Obrazy"
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
      "label": "Usuń"
    },
    "after_event": "Po kliknięciu pojawi się okno potwierdzenia operacji."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Usuń"
    }
  }
]
```

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 disk delete --disk my-disk
```
gdzie:

 * ```--disk``` określa nazwę lub identyfikator *Dysku*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="image delete"].