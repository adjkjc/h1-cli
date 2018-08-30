# Usuwanie ISO

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć [ISO](/resource/storage/disk.md).

## Warunki wstępne

* usunięcie ISO wymaga spełnienia [warunków usuwania ISO](/resource/storage/iso.md#usuwanie)

## Instrukcja

### Panel

W celu usunięcia ISO poprzez panel wykonaj następujące kroki:

1. Wybierz pozycje ```ISOs``` znajdującą się w menu bocznym.
2. Kliknij wybrany zasób spośród listy.  Po kliknięciu pojawią się szczegóły zasobu.
2. Wybierz przycisk ```Akcje```. Po kliknięciu pojawi się lista rozwijana.
3. Wybierz pozycje ```Usuń```. Po kliknięciu pojawi się okno potwierdzenia operacji.
4. Wybierz przycisk ``Usuń``.

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "ISOs"
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
    "after_event": "Po kliknięciu pojawi się okno potwierdzenia operacji"
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

W celu usunięcia dysku z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 disk delete --disk my-disk
```
gdzie:

 * ```--disk``` określa nazwę lub identyfikator dysku

Szczegółowe dane są dostępne w dokumentacji polecenia [h1 disk delete](/h1-cli/disk.md#disk-delete).