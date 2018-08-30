# Opublikowanie ISO

## Wprowadzenie

Dokument wyjaśnia w jaki sposób opublikować [ISO](/resource/storage/iso.md) dla wszystkich użytkowników platformy.

## Warunki wstępne

* wszystkie warunki wykonania operacji [Opublikowanie](/resource/storage/iso.md#opublikowanie)

## Instrukcja

### Panel

W celu opublikowania *ISO* poprzez panel wykonaj następujące kroki:

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
      "label": "Publiczny"
    }
  }
]
```

#### CLI

W celu opublikowania *ISO* wykonaj następujące polecenie:

```bash
h1 iso access grant --iso test-image --project '*'
```

gdzie:

 * ```--iso``` określa nazwę lub identyfikator publikowanego obrazu
 * ```--project '*'``` określa, że publikacja następuje dla wszystkich użytkowników platformy

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="iso access grant"].
