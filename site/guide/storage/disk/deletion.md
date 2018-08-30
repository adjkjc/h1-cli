# Usunięcie dysku
  
## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć [Dysk](/resource/storage/disk.md).

## Warunki wstępne

* usunięcie dysku wymaga spełnienia [warunków usuwania dysku](/resource/storage/disk.md#usuwanie)

## Instrukcja

### Panel

W celu usunięcia dysku poprzez panel wykonaj następujące kroki:

1. Wybierz pozycje ```Dyski``` znajdującą się w menu bocznym.
2. Kliknij wybrany zasób spośród listy.  Po kliknięciu pojawią się szczegóły zasobu.
2. Wybierz przycisk ```Akcje```. Po kliknięciu pojawi się lista rozwijana.
3. Wybierz pozycje ```Usuń```. Po kliknięciu pojawi się okno potwierdzenia operacji.
3. Wypełnij formularz:

	* Określ ```nowy rozmiar dysku``` dla swojego zasobu.

	Przykładowe wartości:

	 * Nowy rozmiar dysku: ```100```

4. Wybierz przycisk ``Zmień rozmiar``.

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

W celu usunięcia dysku z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 disk delete --disk my-disk
```
gdzie:

 * ```--disk``` określa nazwę lub identyfikator dysku

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="disk delete"].