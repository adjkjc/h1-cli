# Utworzenie rekordów DNS

## Wprowadzenie

Dokument wyjaśnia w jaki sposób dodać zestaw rekordów DNS do [DNS](/resource/networking/dns.md).

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki [zarządzania DNS](/resource/networking/dns.md).

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
      "label": "DNS"
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
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Dodaj Nowy Rekord"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "nazwę zestawu rekordów",
          "type": "text",
          "value": "home"
        },
        {
          "name": "typ",
          "type": "text",
          "value": "A"
        },
        {
          "name": "wartość",
          "type": "text",
          "value": "123.123.123.123"
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
      "label": "Dodaj wartość"
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Dodaj zestaw rekordów"
    }
  }
]
```

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 dns record-set a create --name 'home' --zone-name 'example.com' --value '123.123.123.123'
```

gdzie:

 * ```--name``` określa nazwę zestawu rekordów
 * ```--zone-name``` określa nazwę *DNS* do której dodawany jest zestaw rekordów
 * ```--value``` określa wartość w zestawie rekordów
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="dns record-set a create"].

W przypadku konieczności dodania innych typów rekordów dostępne są następujące polecenia:

* [CLI="dns record-set a create"]
* [CLI="dns record-set txt create"]
* [CLI="dns record-set cname create"]
* [CLI="dns record-set mx create"]
* [CLI="dns record-set ns create"]
* [CLI="dns record-set srv create"]