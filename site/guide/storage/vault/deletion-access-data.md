# Usunięcie danych dostępowych z Vault

## Wprowadzenie

Dokument wyjaśnia w jaki sposób usunąć wybrane dane dostępowe z [Vault](/resource/storage/vault.md).

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

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vault credential cert delete --cert my-cert --vault my-vault
```

gdzie:

 * ```--vault``` określa nazwę lub identyfikator *Vault*
 * ```--cert``` określa nazwę lub identyfikator danych dostępowych w postaci klucza SSH
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vault credential cert delete"].

W przypadku konieczności innych typów danych dostępowych dostępne są następujące polecenia:

* [CLI="vault credential password delete"]