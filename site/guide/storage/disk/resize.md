# Zwiększenie rozmiaru dysku

## Wprowadzenie

Dokument wyjaśnia w jaki sposób zwiększyć [Dysk](/resource/storage/disk.md), co pozwala przechowywać większą ilość danych.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* *Dysk* nie jest podłączony albo jest kolejnym dyskiem podłączonym do [Wirtualnej maszyny](/resource/compute/virtual-machine.md).

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
    "after_event": "Po kliknięciu pojawią` strona ze szczegółami danego zasobu.`"
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
          "type": "text",
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

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 disk resize --disk my-disk --size 10
```
gdzie:

 * ```--disk``` określa nazwę lub identyfikator dysku
 * ```--size``` określa nowy rozmiar dysku

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="disk resize"].