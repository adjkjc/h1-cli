# Uruchomienie Wirtualnej maszyny

## Wprowadzenie

Dokument wyjaśnia w jaki sposób uruchomić [Wirtualną maszynę](/resource/compute/virtual-machine.md).

## Warunki wstępne

* wszystkie warunki wykonania operacji [Uruchomienie](/resource/compute/virtual-machine.md#uruchomienie).

## Instrukcja

### Panel

W celu uruchomienie *Wirtualnej maszyny* poprzez panel wykonaj następujące kroki:

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
      "label": "Uruchom"
    }
  }
]
```

#### CLI

W celu uruchomienia *Maszyny Wirtualnej* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm start --vm test-vm
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej maszyny*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm start"].