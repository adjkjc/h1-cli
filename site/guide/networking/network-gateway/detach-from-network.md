# Odłączenie Bramy sieciowej od Sieci

## Wprowadzenie

Dokument wyjaśnia w jaki sposób odłączyć *[Bramę sieciową](/resource/networking/network-gateway.md)* od *[Sieci](/resource/networking/network.md)*.

## Warunki wstępne

* posiadanie [utworzonej](/resource/networking/network.md) *Sieci*
* posiadanie [utworzonej](/resource/networking/network-gateway.md) *Bramy sieciowej*

## Instrukcja

### Panel

W celu przyłączenia bramy sieciowej do sieci poprzez panel wykonaj następujące kroki:

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "Zapora sieciowa"
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

#### CLI

W celu przyłączenia *Zapory sieciowej* do *Sieci* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 netgw detach --firewall secure-zone-fw
```

gdzie:

 * ```--firewall``` określa nazwę lub identyfikator *Zapory sieciowej*
 * ```--network``` okresla nazwę przyłączanej *Sieci*
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="netgw detach"].