# Dodanie klucza SSH do Vault

## Wprowadzenie

Dokument wyjaśnia w jaki sposób dodać klucz SSH do [Vault](/resource/storage/vault.md) stanowiące dane dostępowe.

Klucze SSH w przypadku *Vault* mogą pochodzić z opcji projektu lub opcji użytkownika, albo zostać wygenerowane "ad-hoc".

## Dodanie klucza SSH na podstawie istniejącego klucza

Utworzenie Vault z wykorzystaniem istniejącego klucza pozwala na sprawne ponowne wykorzystywanie kluczy SSH.

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
      "type": "button",
      "selector": "navbar>.vm",
      "label":"Utwórz nowy"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label":"Użyj istniejącego publicznego klucza SSH"
    },
    "after_event": "Po kliknięciu pojawi się lista kluczy użytkownika i projektu."
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

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vault credential cert add --vault my-vault --name my-key --sshkey my-home-ssh
```

gdzie:

 * ```--vault``` określa nazwę lub identyfikator *Vault*
 * ```--name``` określa nazwę dla danych dostępowych
 * ```--sshkey``` określa wykorzystany klucz SSH projektu lub użytkownika

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vault credential cert add"].

## Wygenerowanie i dodanie klucza SSH

Wygenerowanie klucza SSH na stronie, a następnie dodanie go do *Vault* pozwala na sprawne rozpoczącenie pracy z wykorzystaniem
bezpiecznej metody dostępu jaką są klucze SSH.

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
      "type": "button",
      "selector": "navbar>.vm",
      "label":"Utwórz nowy"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label":"Wygeneruj nowe klucze SSH"
    },
    "after_event": "Po kliknięciu zostanie w Twojej przeglądarce wygenerowana odpowiednia para kluczy, udostępniona do pobrania, a formularz uzupełniony właściwymi danymi."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Pobierz klucz prywatny dla Putty"
    },
    "after_event": "Po kliknięciu i zapisaniu pliku kolejne kroki zostaną odblokowane."
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label":"Utwórz"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  }
]
```