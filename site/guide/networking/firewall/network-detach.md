# Odłączenie Zapory sieciowej od Sieci

## Wprowadzenie

Dokument wyjaśnia w jaki sposób odłączyć *[Zaporę sieciową](/resource/networking/firewall.md)* od *[Sieci](/resource/networking/network.md)*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Odłączenie](/resource/networking/firewall.md).

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
      "label": "Zapory sieciowe"
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_resource",
      "selector": "navbar>.vm"
    },
    "after_event": "Po kliknięciu pojawi się strona ze szczegółami *Zasobu*."
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
      "label": "Rozłącz"
    },
    "after_event": "Po kliknięciu pojawi się okno potwierdzenia operacji."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Rozłącz"
    }
  }
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 firewall detach --firewall secure-zone-fw
```

gdzie:

 * ```--firewall``` określa nazwę lub identyfikator zapory sieciowej
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="firewall detach"].