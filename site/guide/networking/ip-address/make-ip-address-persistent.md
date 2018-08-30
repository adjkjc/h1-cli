# Utrwalenie publicznego adresu IP 

## Wprowadzenie

Dokument wyjaśnia w jaki sposób przekształcić ulotny *[Adres IP](/resource/networking/ip-address.md)* w [Sieci](/resource/networking/network.md) w 

## Warunki wstępne

Zanim przekształcisz ulotny *Adres IP* w trwały, sprawdź czy spełniasz:

* wszystkie [warunki utworzenia Adresu IP](/resource/networking/ip-address.md#utworzenie)
* istnienie [utworzonej]() Wirtualnej maszyny z przypisanym ulotnym adresem IP

## Instrukcja

### Panel

Aby przekształcić ulotny *Adres IP* w trwały wykonaj następujące kroki:

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "Sieci"
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Utwórz Nowy"
    },
    "after_event": "Po kliknięciu zostanie przydzielony losowy publiczny adres IP."
  },
  {
    "action_name": "click",
    "data": {
      "type": "tab",
      "selector": "navbar>.vm",
      "label": "Adresy IP"
    },
    "after_event": "Po kliknięciu pojawi się lista reguł."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Dodaj Nowy"
    },
    "after_event": "Po kliknięciu zostanie otwarte okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [],
      "defined_all": false
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Dodaj"
    },
    "after_event": "Po kliknięciu zostanie dodany adres IP."
  }
]
```

#### CLI

W celu utworzenia *Adresu IP* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 ip create
```

Szczegółowe dane są dostępne w dokumentacji polecenia [h1 ip create](/h1-cli/ip.md#ip-create).