# Odłączenie Dysku od Wirtualnej maszyny

## Wprowadzenie

Dokument wyjaśnia w jaki sposób odłączyć *[Dysk](/resource/storage/disk.md)* od 
*[Wirtualnej maszyny]((/resource/compute/virtual-machine.md))*.

Po odłączeniu *Dysku* możliwe jest jego ponowne [przyłączenie](./disk-attach.md).

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Odłączenie Dysku](/resource/compute/virtual-machine.md).

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
      "label": "Dyski"
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
      "label":"Odłącz"
    },
    "after_event": "Po kliknięciu pojawi się okno potwierdzenia operacji."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "label": "Odłącz"
    }
  }
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm disk detach --vm test-vm --disk my-disk-0
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej maszyny*
 * ```--iso``` określa nazwę lub identyfikator odłączanego *Dysku*
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm disk detach"].