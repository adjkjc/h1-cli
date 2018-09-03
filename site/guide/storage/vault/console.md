# Uzyskanie dostępu do konsoli Vault

## Wprowadzenie

Dokument wyjaśnia w jaki sposób uzyskać dostęp do konsoli [Vault](/resource/storage/vault.md), która pozwala na 
zapoznanie się z trescią zgromadzonych danych i wykonanie na nich podstawowych operacji bezpośrednio z okna 
przeglądarki.

## Warunki wstępne

* wykonanie operacji wymaga [utworzonego](./creating.md) *Vault* w stanie ```Właczony```

## Instrukcja

### Panel

W celu uzyskania dostepu do konsoli *Vault* poprzez panel wykonaj następujące kroki:

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
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Konsola"
    }
  }
]
```