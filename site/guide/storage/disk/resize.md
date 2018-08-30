# Zmiana rozmiaru dysku

## Wprowadzenie
  
Dokument wyjaśnia w jaki sposób rozszerzyć [Dysk](/resource/storage/disk.md). Rozszerzenie dysku umożliwia zwiększenie rozmiaru przechowywanych danych

## Warunki wstępne

* Dysk nie jest podłączony albo jest kolejnym dyskiem podłączonym do [Wirtualnej Maszyny](/resource/compute/virtual-machine.md).

## Instrukcja

### Panel

W celu zmiany rozmiaru dysku poprzez panel wykonaj następujące kroki:

1. Wybierz pozycje ```Dyski``` znajdującą się w menu bocznym.
2. Kliknij wybrany zasób spośród listy.  Po kliknięciu pojawią się szczegóły zasobu.
2. Wybierz przycisk ```Akcje```. Po kliknięciu pojawi się lista rozwijana.
3. Wybierz pozycje ```Zmień rozmiar```. Po kliknięciu pojawi się okno z formularzem.
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
      "label": "Zmień rozmiar"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "nowy rozmiar dysku",
          "type": "number",
          "value": "100"
        }
      ],
      "defined_all": true
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Zmień rozmiar"
    }
  }
]
```

### CLI

W celu zmiany rozmiaru dysku z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 disk resize --disk my-disk --size 10
```
gdzie:

 * ```--disk``` określa nazwę lub identyfikator dysku
 * ```--size``` okresla nowy rozmiar dysku

Szczegółowe dane są dostępne w dokumentacji polecenia [h1 disk resize](/h1-cli/disk.md#disk-resize).