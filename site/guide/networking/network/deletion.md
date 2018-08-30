# Usunięcie sieci

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć  [Sieć](/resource/networking/network.md).

## Warunki wstępne

* usunięcie *Sieć* wymaga spełnienia [warunków usuwania Sieci](/resource/networking/network.md#usuwanie)

## Instrukcja

### Panel

W celu usunięcia *Sieć* poprzez panel wykonaj następujące kroki:

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

W celu usunięcia *Sieci* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 network delete --network my-network
```

gdzie:

 * ```--disk``` określa nazwę lub identyfikator *Sieci*

Szczegółowe dane są dostępne w dokumentacji polecenia [h1 network delete](/h1-cli/network.md#network-delete).