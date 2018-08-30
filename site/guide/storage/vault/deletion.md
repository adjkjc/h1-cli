# Usunięcie sieci

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć [Vault](/resource/storage/vault.md).

## Warunki wstępne

* usunięcie *Vault* wymaga spełnienia [warunków usuwania Vault](/resource/storage/vault.md#usuwanie)

## Instrukcja

### Panel

W celu usunięcia *Vault* poprzez panel wykonaj następujące kroki:

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "Vault"
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

W celu usunięcia *Vault* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vault delete --vault my-vault
```

gdzie:

 * ```--vault``` określa nazwę lub identyfikator *Vault*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vault delete"].