# Utworzenie Migawki

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć [Migawkę](/resource/storage/vault.md), którą możesz wykorzystywać jako podstawę 
do nowego *Vaulta* lub zabezpieczenie stanu *Vault* przed zmianami.
 
## Warunki wstępne

* utworzenie *Migawki* wymaga spełnienia [warunków utworzenia Migawki](/resource/storage/snapshot.md#utworzenie)

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
      "label": "Wykonaj migawkę"
    },
    "after_event:": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Nazwa",
          "type": "name",
          "value": "moja-migawka"
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
    }
  }
]
```


#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 snapshot create --vault my-vault --name my-new-snapshot
```

gdzie:

 * ```--name``` określa nazwę nowo utworzonej *Migawki*
 * ```--vault``` określa nazwę źrodłowego *Vault*
 
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="snapshot create"].