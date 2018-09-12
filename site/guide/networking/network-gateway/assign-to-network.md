# Przyłączenie Bramy sieciowej do Sieci

## Wprowadzenie

Dokument wyjaśnia w jaki sposób przyłączyć *[Brame sieciową](/resource/networking/network-gateway.md)* do *[Sieci](/resource/networking/network.md)*.

## Warunki wstępne

* posiadanie [utworzonej](/resource/networking/network.md) *Sieci*
* posiadanie [utworzonej](/resource/networking/network-gateway.md)   *Zapory sieciowej*

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
      "label": "Brama sieciowa"
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
      "label": "Przyłącz"
    },
    "after_event": "Po kliknięciu pojawi się okno potwierdzenia operacji."
  }

]
```

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 firewall attach --firewall secure-zone-fw --network my-safe-net
```

gdzie:

 * ```--firewall``` określa nazwę lub identyfikator *Zapory sieciowej*
 * ```--network``` okresla nazwę przyłączanej *Sieci*
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="firewall attach"].