# Usunięcie bramy sieciowej

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć [bramę sieciową](/resource/networking/network-gateway.md).

## Warunki wstępne

* usunięcie wymaga spełnienia [warunków usuwania bramy sieciowej](/resource/networking/network-gateway.md#usuwanie)

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
      "label": "Usuń"
    },
    "after_event": "Po kliknięciu pojawi się okno potwierdzenia operacji."
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

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="dns zone delete"].