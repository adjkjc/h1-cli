# Utworzenie Obrazu

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć [Obrazu](/resource/storage/iso.md) wykorzystywany jako wzorzec [Wirtualnej maszyny](/resource/compute/virtual-machine.md).
 
## Warunki wstępne

* utworzenie *Obrazu* wymaga spełnienia [warunków utworzenia ISO](/resource/storage/disk.md#utworzenie)

## Instrukcja

### Panel

<!-- TODO: Monika, utworzeni czy stworzenie? -->

W celu wykonania operacji z wykorzystaniem panelu wykonaj następujące kroki:

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "Wirtualne maszyny"
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
      "label": "Utwórz Obraz"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Nazwa obrazu",
          "type": "name",
          "value": "moj-obraz"
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
h1 image create --vm test-vm --name dev-image
```
gdzie:

 * ```--vm``` określa nazwę nowoutworzonego *Obrazu*
 * ```--source-url``` określa identyfikator lub nazwę wzorcowej *Wirtualnej maszyny*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="iso create"].