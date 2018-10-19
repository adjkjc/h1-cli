# Ustawienie bramy domyślnej

## Wprowadzenie

Dokument wyjaśnia w jaki sposób skonfigurować bramę sieciową w *[Sieć](/resource/networking/network.md)*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* utworzenie wymaga spełnienia operacji [Ustawienie bramy domyślnej](/resource/networking/network.md#ustawienie-bramy-domyslnej)

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
      "label": "Sieci"
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
      "type": "tridot",
      "section": "Brama sieciowa"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Brama sieciowa",
          "type": "text",
          "value": "10.21.154.1"
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
      "label": "Zastosuj"
    },
    "after_event": "Po kliknięciu zmiany zostaną zastosownae."
  }
]
```