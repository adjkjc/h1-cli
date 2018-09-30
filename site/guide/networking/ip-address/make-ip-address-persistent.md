# Przekształcenie ulotnego Adresu IP w trwały

## Wprowadzenie

Dokument wyjaśnia w jaki sposób przekształcić ulotny *[Adres IP](/resource/networking/ip-address.md)* w *[Sieci](/resource/networking/network.md)*.

Ulotny *Adres IP* istnieje wyłącznie wraz z *[Wirtualną maszyną](/resource/compute/virtual-machine.md)*, która posiada *[Adapter sieciowy](/resource/networking/network-adapter.md)*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

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
      "label": "Dodaj"
    },
    "after_event": "Po kliknięciu zostanie dodany adres IP."
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
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Przekształć w trwały"
    },
    "after_event": "Po kliknięciu akcja zostanie niezwłocznie wykonana."
  }
]
```
 
<!-- https://github.com/hyperonecom/h1-cli/issues/180 -->