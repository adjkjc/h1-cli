# Dodanie hasła do Vault

## Wprowadzenie

Dokument wyjaśnia w jaki sposób dodać hasło do *[Vault](/resource/storage/vault.md)* stanowiące dane dostępowe.

Zalecane jest wykorzystanie [kluczy SSH](add-ssh-key.md) w celu uzyskania dostępu do *Vault*.

## Warunki wstępne

* utworzenie *Vault* wymaga spełnienia [warunków utworzenia Vault](/resource/storage/vault.md#utworzenie)

## Instrukcja

### Panel

W celu dodania do *Vault* hasła wykonaj następujące kroki:

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
      "type": "button",
      "selector": "navbar>.vm",
      "label":"Utwórz nowy"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularz."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label":"SSH"
    },
    "after_event": "Po kliknięciu dostępne pole formularza ulegną zmianie."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Nazwa",
          "type": "name",
          "value": "moje-sekretne-haslo-dziennika"
        },
        {
          "name": "Typ",
          "type": "choose",
          "value": "Hasło"
        },
        {
          "name": "Hasło",
          "type": "password"
        }
      ],
      "defined_all": true
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_list",
      "selector": "navbar>.vm"
    },
    "after_event": "Po kliknięciu formularz zostanie uzupełniony wlaściwymi danymi."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label":"Utwórz"
    }
  }    
]
```

#### CLI

W celu dodania hasła jako danych dostępowych do *Vault* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vault credential password add --name my-pass --password secret-password --vault my-vault
```

gdzie:

 * ```--vault``` określa nazwę lub identyfikator *Vault*
 * ```--name``` określa nazwę dla danych dostępowych
 * ```--password``` określa sekretne hasło
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vault credential password add"].