# Przyłączenie Dysku do Wirtualnej maszyny

## Wprowadzenie

Dokument wyjaśnia w jaki sposób przyłączyć *[Dysk](/resource/storage/disk.md)* do 
*[Wirtualnej maszyny]((/resource/compute/virtual-machine.md))*.

Po przyłączeniu *Dysku* możliwe jest jego [odłączenie](./disk-detach.md).

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Przyłączenie Dysku](/resource/compute/virtual-machine.md).

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
      "type": "button",
      "label": "Przyłącz dysk"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
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
          "name": "Dysk",
          "type": "choose",
          "value": "moj-dysk"
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
      "label": "Przyłącz"
    }
  }
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm disk attach --vm test-vm --disk my-disk-0
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej maszyny*
 * ```--iso``` określa nazwę lub identyfikator przyłączanego *Dysku*
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm disk attach"].