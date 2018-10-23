# Odwiązanie Adresu IP od innego Adresu IP

## Wprowadzenie

Dokument wyjaśnia w jaki sposób odwiązać *[Adres IP](/resource/networking/ip-address.md)* od innego *Adresu IP*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Odwiązanie od innego adresem IP](/resource/networking/ip-address.md).

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
      "label": "Adresy IP"
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
    "action_name": "identity",
    "data": {
        "label": "Adaptery sieciowe"
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_resource",
      "location":"section",
      "section":"Adresy IP"
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_tridot",
      "selector": "navbar>.vm"
    },
    "after_event": "Po kliknięciu operacja zostanie niezwłocznie wykonana."
  }
]
```

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 ip associate --ip 62.181.8.21 --private-ip 10.177.2.10
```

gdzie:

 * ```--ip``` określa publiczny *Adres IP* lub jego identyfikator
 * ```--private-ip``` określa prywatny *Adres IP*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="ip associate"].