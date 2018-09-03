# Zrestartowania Wirtualnej Maszyny

## Wprowadzenie

Dokument wyjaśnia w jaki sposób zrestartować [Wirtualną maszynę](/resource/compute/virtual-machine.md).

## Warunki wstępne

* wszystkie warunki wykonania operacji [Zrestartowanie](/resource/compute/virtual-machine.md#zrestartowanie).

## Instrukcja

### Panel

W celu zrestartowania *Wirtualnej maszyny* poprzez panel wykonaj następujące kroki:

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
      "label": "Zrestartuj"
    }
  }
]
```

#### CLI

W celu zrestartowania *Maszyny Wirtualnej* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm restart --vm test-vm
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej maszyny*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm restart"].