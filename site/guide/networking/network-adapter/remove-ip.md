# Usunięcie Adresu IP z Adaptera sieciowego

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć *[Adres IP](/resource/networking/ip-address.md)* z *[Adaptera siecioweg](/resource/networking/network-adapter.md)*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* usunięcie adresu IP wymaga spełnienia [warunków operacji usunięcia adresu IP](/resource/networking/network-adapter.md#usunięcie-adresu-ip)

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
      "type": "entry_resource"
    },
    "after_event": "Po kliknięciu zostanie otwarta strona z szczegółami zasobu."
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
      "type": "entry_resource"
    },
    "after_event": "Po kliknięciu zostanie otwarta strona z szczegółami zasobu."
  },
  {
    "action_name": "click",
    "data": {
      "type": "tridot",
      "location":"label",
      "label":"Adres IP",
      "selector": "navbar>.vm"
    },
    "after_event": "Po kliknięciu pojawi się lista rozwijana."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "selector": "navbar>.vm",
      "label": "Usuń Adres IP z adaptera sieciowego"
    }
  }
]
```

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm nic ip delete --ip my-ip --vm my-vm --nic 5b1f28ffdadb705edd76b411 --ip 123.0.0.50
```

gdzie:

 * ```--vm``` - określa nazwę lub identyfikator *Wirtualnej maszyny*
 * ```--nic``` - określa identyfikator *Adaptera sieciowego*
 * ```--ip``` - określa nazwę lub identyfikator *Adresu IP* 

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm nic ip delete"].