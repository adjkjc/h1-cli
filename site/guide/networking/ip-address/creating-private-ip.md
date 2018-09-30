# Utworzenie Adresu IP w Sieci prywatnej

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć *[Adres IP](/resource/networking/ip-address.md)* w *[Sieci](/resource/networking/network.md)*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* utworzona *Sieć* [zgodnie z przewodnikiem](/guide/networking/network/creating.md)
* wszystkie [warunki utworzenia Adresu IP](/resource/networking/ip-address.md#utworzenie)

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
      "label": "Adresy IP"
    },
    "after_event": "Po kliknięciu pojawi się lista adresów IP."
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

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 ip create
```

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="ip create"].