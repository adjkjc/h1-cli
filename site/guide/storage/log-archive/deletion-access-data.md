# Usunięcie danych dostępowych z Dziennika

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć wybrane dane dostępowe z [Dziennika](/resource/storage/log-archive.md).

## Warunki wstępne

* usunięcie *Dziennika* wymaga spełnienia [warunków usuwania Dziennika](/resource/storage/log-archive.md#usuwanie)

## Instrukcja

### Panel

W celu usunięcia wybranych danych danych dostępowych z *Dziennika* poprzez panel wykonaj następujące kroki:

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "Dzienniki"
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
      "type": "tab",
      "selector": "navbar>.vm",
      "label": "Dane dostępowe"
    },
    "after_event": "Po kliknięciu pojawi się lista danych dostępowych."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_tridot",
      "selector": "navbar>.vm"
    },
    "after_event": "Po kliknięciu pojawi się lista rozwijana."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "selector": "navbar>.vm",
      "label": "Usuń"
    }
  }
]
```

#### CLI

W celu usunięcia haseł stanowiących dane dostępowe do *Dziennika* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 log credential password delete --password my-cert --vault my-vault
```

gdzie:

 * ```--log``` określa nazwę lub identyfikator *Dziennka*
 * ```--password``` określa nazwę lub identyfikator danych dostępowych
 
<!-- Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="log credential password delete"]. -->