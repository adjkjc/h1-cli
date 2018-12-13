# Odpublikowanie Obrazu

## Wprowadzenie

Dokument wyjaśnia w jaki sposób odpublikować [Obrazu](/resource/storage/image.md).

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Odpublikowanie](/resource/storage/image.md#odpublikowanie)

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
    "after_event": "Po kliknięciu pojawią szczegóły *Zasobu*."
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
      "label": "Prywatny"
    }
  }
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 iso access revoke --iso test-image --project '*'
```

gdzie:

 * ```--iso``` określa nazwę lub identyfikator publikowanego obrazu
 * ```--project '*'``` określa, że publikacja zachodziła dla wszystkich użytkowników platformy

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="image access revoke"].
