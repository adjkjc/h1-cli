# Utworzenie Vaulta

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć [Vault](/resource/storage/vault.md), który możesz wykorzystać do 
długoterminowego przechowywania danych i dostępu do nich z wykorzystaniem popularnych narzędzi takich jak  ssh, 
sftp, scp, git i rsync.
 
W przypadku tworzenia *Vault* możesz utworzyć go pustego lub na podstawie istniejącej *[Migawki](/resource/storage/snapshot.md)*.

## Warunki wstępne

* utworzenie *Vault* wymaga spełnienia [warunków utworzenia Vault](/resource/storage/vault.md#utworzenie)

## Utworzenie pustego *Vault*

Utworzenie pustego *Vault* jest najszybszą metodą na sprawne rozpoczęcie nowej pracy i procesu gromadzenie danych.

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
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Utwórz Nowy"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Nazwa",
          "type": "name",
          "value": "moj-vault"
        },
        {
          "name": "Rozmiar",
          "type": "number",
          "value": "10"
        }
      ],
      "defined_all": true
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Utwórz"
    },
    "after_event": "Po kliknięciu przejdziesz do strony ze szczegółami nowego zasobu."
  }
]
```


#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vault create --name my-vault --size 10
```

gdzie:

 * ```--name``` określa nazwę nowo utworzonego *Vault*
 * ```--size``` określa jego rozmiar

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vault create"].

## Utworzenie *Vault* na podstawie *Migawki*

Utworzenie *Vault* na podstawie *Migawki* umożliwia m. in. sprawne uzyskanie dostępu do danych w niej zgromadzonych.

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
      "type": "entry_resource"
    },
    "after_event": "Po kliknięciu zostanie otwarta strona z szczegółami zasobu."
  },
  {
    "action_name": "click",
    "data": {
      "type": "tab",
      "selector": "navbar>.vm",
      "label": "Migawka"
    },
    "after_event": "Po kliknięciu pojawi się lista wykonanych migawek."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry_resource"
    },
    "after_event": "Po kliknięciu zostanie otwarta strona z szczegółami zasobu."
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
      "label": "Utwórz Vault"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Nazwa",
          "type": "name",
          "value": "moj-vault"
        },
        {
          "name": "Rozmiar",
          "type": "number",
          "value": "10"
        }
      ],
      "defined_all": true
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Utwórz"
    },
    "after_event": "Po kliknięciu przejdziesz do strony ze szczegółami nowego zasobu."
  }
]
```

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vault create --name my-vault --size 10 --snapshot my-snapshot
```

gdzie:

 * ```--name``` określa nazwę nowo utworzonego *Vault*
 * ```--size``` określa jego rozmiar
 * ```--snapshot``` określa identyfikator lub nazwę źródłowej *Migawki*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vault create"].
