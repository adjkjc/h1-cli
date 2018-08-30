# Usunięcie sieci

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć [Zaporę sieciową](/resource/networking/firewall.md).

## Warunki wstępne

* usunięcie wymaga spełnienia [warunków usuwania Zapory sieciowej](/resource/networking/firewall.md#usuwanie)

## Instrukcja

### Panel

W celu usunięcia *Zapory sieciowej* poprzez panel wykonaj następujące kroki:

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

W celu usunięcia *Zapory sieciowej* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 firewall delete --firewall my-firewall
```

gdzie:

 * ```--firewall``` określa nazwę lub identyfikator *Zapory sieciowej*

Szczegółowe dane są dostępne w dokumentacji polecenia [h1 firewall delete](/h1-cli/firewall.md#firewall-delete).