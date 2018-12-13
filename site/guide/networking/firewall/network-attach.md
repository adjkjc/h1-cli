# Przyłączenie Zapory sieciowej do Sieci

## Wprowadzenie

Dokument wyjaśnia w jaki sposób przyłączyć *[Zaporę sieciową](/resource/networking/firewall.md)* do *[Sieci](/resource/networking/network.md)*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Przyłączenie](/resource/networking/firewall.md).

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
      "label": "Przyłącz"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem"
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Sieć",
          "type": "choose",
          "value": "moja-siec"
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
      "label": "Przyłacz"
    }
  }
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 firewall attach --firewall secure-zone-fw --network my-safe-net
```

gdzie:

 * ```--firewall``` określa nazwę lub identyfikator *Zapory sieciowej*
 * ```--network``` określa nazwę przyłączanej *Sieci*
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="firewall attach"].