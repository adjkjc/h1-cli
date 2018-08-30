# Usunięcie DNS

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć [DNS](/resource/networking/network.md).

## Warunki wstępne

* usunięcie wymaga spełnienia [warunków usuwania DNS](/resource/networking/network.md#usuwanie)

## Instrukcja

### Panel

W celu usunięcia poprzez panel wykonaj następujące kroki:

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
    "after_event": "Po kliknięciu pojawią szczegóły zasobu."
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
      "label": "Usuń"
    },
    "after_event": "Po kliknięciu pojawi się okno potwierdzenia operacji"
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Usuń"
    }
  }
]
```

#### CLI

W celu usunięcia z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 dns zone delete --zone example.com.
```

gdzie:

 * ```--zone``` określa nazwę lub identyfikator *Sieci*

Szczegółowe dane są dostępne w dokumentacji polecenia [h1 dns zone delete](/h1-cli/dns.md#dns-zone-delete).