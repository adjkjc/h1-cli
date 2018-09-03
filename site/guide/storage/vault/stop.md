# Wyłączyć dostępu do Vault

## Wprowadzenie

Dokument wyjaśnia w jaki sposób wyłączyć dostęp do [Vault](/resource/storage/vault.md).

## Warunki wstępne

* wszystkie warunki wykonania operacji [Wyłączenie dostępu](/resource/storage/vault.md#wylaczenie-dostepu).

## Instrukcja

### Panel

W celu wyłączenia dostępu do *Vault* poprzez panel wykonaj następujące kroki:

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
      "type": "entry",
      "selector": "navbar>.vm",
      "label": "Stop"
    }
  }
]
```