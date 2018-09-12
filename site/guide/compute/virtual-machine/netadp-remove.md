# Usunięcie Adaptera sieciowego z Wirtualnej maszyny

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć *[Adaper sieciowy](/resource/networking/network-adapter.md)* z *[Wirtualnej maszyny](/resource/compute/virtual-machine.md).

## Warunki wstępne

* posiadanie *Wirtualnej maszyny* w stanie ``Wyłączony`` z co najmniej 1 *Adapterem sieciowym* 

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
      "type": "entry_tridot",
      "selector": "navbar>.vm"
    },
    "after_event": "Po kliknięciu pojawi się lista wyboru"
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "selector": "navbar>.vm"
      "label":"Usuń Adapter sieciowy"
    },
    "after_event": "Po kliknięciu pojawi się okno potwierdzenia operacji."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Usuń"
    }
  }
]
```

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm nic delete --nic my-nic --vm test-vm
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej maszyny*
 * ```--nic``` określa identyfikator *Adaptera sieciowego*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm nic delete"].
