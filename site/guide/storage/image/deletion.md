# Usuwanie Obrazu

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć *[Obraz](/resource/storage/image.md)*.

## Warunki wstępne

* usunięcie *Obrazu* wymaga spełnienia [warunków usuwania ISO](/resource/storage/iso.md#usuwanie)

## Instrukcja

### Panel

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

W celu usunięcia *Obrazu* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 disk delete --disk my-disk
```
gdzie:

 * ```--disk``` określa nazwę lub identyfikator dysku

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="image delete"].