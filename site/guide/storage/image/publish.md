# Opublikowanie Obrazu

## Wprowadzenie

Dokument wyjaśnia w jaki sposób opublikować [Obraz](/resource/storage/image.md) dla wszystkich użytkowników platformy.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Opublikowanie](/resource/storage/image.md#opublikowanie)

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
h1 image access grant --image test-image --project '*'
```

gdzie:

 * ```--image``` określa nazwę lub identyfikator publikowanego *Obrazu*
 * ```--project '*'``` określa, że publikacja następuje dla wszystkich użytkowników platformy

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="image access grant"].
