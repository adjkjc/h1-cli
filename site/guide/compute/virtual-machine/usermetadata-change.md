# Zmiana Metadanych Użytkownika w Wirtualnej Maszynie

## Wprowadzenie

Dokument wyjaśnia w jaki sposób zmienić *Metadane* *Użytkownika* dla [Wirtualnej maszyny](/resource/compute/virtual-machine.md).

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Zmiana Metadanych Użytkownika](/resource/compute/virtual-machine.md).

## Instrukcja

### Panel

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "Wirtualne Maszyny"
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
      "label": "Userdata"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzeme."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Userdata",
          "type": "text",
          "value": "any-text"
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
      "label":"OK"
    }
  }
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm userdata --vm test-vm --userdata-file ./data.txt
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej maszyny*
 * ```--userdata-file``` określa ścieżkę do pliku z *Metadanymi*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm userdata"].