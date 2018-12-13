# Powiązanie Adresu IP z innym Adresem IP

## Wprowadzenie

Dokument wyjaśnia w jaki sposób powiązać *[Adres IP](/resource/networking/ip-address.md)* z innym *Adresem IP*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Powiązanie z innym adresem IP](/resource/networking/ip-address.md).

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
    "after_event": "Po kliknięciu zostanie otwarta strona z szczegółami *Zasobu*."
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
      "type": "button",
      "selector": "navbar>.vm",
      "label": "powiąż"
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
          "value": "62.181.8.22"
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
      "label": "Powiąż"
    },
    "after_event": "Po kliknięciu akcja zostanie niezwłocznie wykonana."
  }
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 ip associate --ip 62.181.8.21 --private-ip 10.177.2.10
```

gdzie:

 * ```--ip``` określa publiczny *Adres IP* lub jego identyfikator
 * ```--private-ip``` określa prywatny *Adres IP*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="ip associate"].