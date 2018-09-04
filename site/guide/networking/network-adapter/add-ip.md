# Dodanie adresu IP do Adaptera sieciowego

## Wprowadzenie

Dokument wyjaśnia w jaki sposób dodać *[Adres IP](/resource/networking/ip-address.md)* do *[Adaptera siecioweg](/resource/networking/network-adapter.md)*.

## Warunki wstępne

* dodanie adresu IP wymaga spełnienia [warunków operacji dodania adresu IP](/resource/networking/network-adapter.md#dodanie-adresu-ip)

## Instrukcja

### Panel
      
W celu dodania *Adresu IP* do *Adaptera sieciowego* poprzez panel wykonaj następujące kroki:

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
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Usuń"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Trwały adres IP",
          "type": "choose",
          "value": "62.181.9.52"
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
      "label": "Dodaj"
    }
  }
]
```

#### CLI

W celu dodania *Adresu IP* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm nic ip add --vm my-vm --nic 5b1f28ffdadb705edd76b411 --ip 5784e97be2627505227b584c
```

gdzie:

 * ```--vm``` - określa nazwę lub identyfikator *Wirtualnej maszyny*
 * ```--nic``` - określa identyfikator *Adaptera sieciowego*
 * ```--ip``` - określa nazwę lub identyfikator trwałego *Adresu IP* 


Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm nic ip add"].