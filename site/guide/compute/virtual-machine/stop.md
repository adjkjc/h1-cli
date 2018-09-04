# Wyłączenie Wirtualnej maszyny

## Wprowadzenie

Dokument wyjaśnia w jaki sposób wyłączyć [Wirtualną maszynę](/resource/compute/virtual-machine.md).

## Warunki wstępne

* wszystkie warunki wykonania operacji [Wyłączenie](/resource/compute/virtual-machine.md#wylaczenie).

## Instrukcja

### Panel

W celu wyłączenia *Wirtualnej maszyny* poprzez panel wykonaj następujące kroki:

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
      "label": "Wyłącz"
    }
  }
]
```

#### CLI

W celu wyłączenia *Maszyny Wirtualnej* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm stop --vm test-vm
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej maszyny*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm stop"].