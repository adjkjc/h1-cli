# Dodanie Adaptera sieciowego do Wirtualnej maszyny

## Wprowadzenie

Dokument wyjaśnia w jaki sposób dodać *[Adaper sieciowy](/resource/networking/network-adapter.md)* do *[Wirtualnej maszyny](/resource/compute/virtual-machine.md).

## Warunki wstępne

* posiadanie *Wirtualnej maszyny*

## Instrukcja

### Panel

W celu dodania dodania *Adaptera sieciowego* do *Wirtualnej maszyny* poprzez panel wykonaj następujące kroki:

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "Wirtualna maszyna"
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
      "label": "Adaptery sieciowe"
    },
    "after_event": "Po kliknięciu pojawi się lista adapterów sieciowych."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Dodaj adapter sieciowy"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Network",
          "type": "choose",
          "value": "Internet public network"
        }
      ],
      "defined_all": false
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Dodaj"
    }
  }
]
```

#### CLI

W celu dodania *Adaptera sieciowego* do *Wirtualnej maszyny* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm nic create --vm test-vm2 --type public
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej maszyny*
 * ```--type``` określa typ *Adaptera sieciowego*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm nic add"].