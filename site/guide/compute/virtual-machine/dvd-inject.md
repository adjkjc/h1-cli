# Wsunięcie ISO do napędu DVD Wirtualnej maszyny

## Wprowadzenie

Dokument wyjaśnia w jaki sposób wsunąć *[ISO](/resource/storage/iso.md)* do napędu DVD 
*[Wirtualnej maszyny]((/resource/compute/virtual-machine.md))*, co umożliwia uruchomienie dowolnego 
systemu operacyjnego lub dostęp do danych.

Po wsunięciu *ISO* możliwe jest go [wysunięcie](./dvd-eject.md).

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Wysunięcie ISO](/resource/compute/virtual-machine.md).

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
      "label": "Wirtualne maszyny"
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_resource",
      "selector": "navbar>.vm"
    },
    "after_event": "Po kliknięciu pojawi się strona ze szczegółami zasobu."
  },
  {
    "action_name": "click",
    "data": {
      "type": "tab",
      "selector": "navbar>.vm",
      "label": "Napędy DVD"
    },
    "after_event": "Po kliknięciu pojawi się lista pozycji."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "selector": "navbar>.vm",
      "label":"Wsuń ISO"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "ISO",
          "type": "choose",
          "value": "moje-iso"
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
      "label": "Wsuń"
    }
  }
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm dvd insert --vm VM --iso ISO
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej maszyny*
 * ```--iso``` określa nazwę lub identyfikator wsuwanej *ISO*
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm dvd insert"].