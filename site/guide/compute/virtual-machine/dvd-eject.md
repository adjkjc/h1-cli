# Wysunięcie ISO do napędu DVD Wirtualnej maszyny

## Wprowadzenie

Dokument wyjaśnia w jaki sposób wysunąć *[ISO](/resource/storage/iso.md)* z napędu DVD 
*[Wirtualnej maszyny]((/resource/compute/virtual-machine.md))* po wcześniej [wsunięciu ISO](./dvd-inject.md).

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Wsunięcie ISO](/resource/compute/virtual-machine.md).

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
    "after_event": "Po kliknięciu pojawi się strona ze szczegółami *Zasobu*."
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
      "type": "entry_tridot"
    },
    "after_event": "Po kliknięciu pojawi się lista rozwijana."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "selector": "navbar>.vm",
      "label":"Wysuń ISO"
    }
  }
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm dvd eject --vm VM 
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej maszyny*
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm dvd eject"].