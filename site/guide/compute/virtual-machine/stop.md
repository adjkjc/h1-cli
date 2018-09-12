# Zatrzymanie Wirtualnej maszyny

## Wprowadzenie

Dokument wyjaśnia w jaki sposób zatrzymać [Wirtualną maszynę](/resource/compute/virtual-machine.md).

## Warunki wstępne

* wszystkie warunki wykonania operacji [Zatrzymania](/resource/compute/virtual-machine.md#zatrzymanie).

## Instrukcja

### Panel

W celu zatrzymania *Wirtualnej maszyny* poprzez panel wykonaj następujące kroki:

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
      "label": "Zatrzymaj"
    }
  }
]
```

#### CLI

W celu zatrzymania *Wirtualnej maszyny* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm stop --vm test-vm
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej maszyny*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm stop"].