# Przekazanie Zasobu

## Wprowadzenie

Dokument wyjaśnia w jaki sposób przekazać *Zasób* pomiędzy *Projektami*.

## Instrukcja

### Panel

Poniżej przedstawiono przekazanie *Adresu IP*. Analogiczne postępowanie jest w przypadku innych zasobów.

```guide
[
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "location": "sidebar",
      "selector": ".nav > li:nth-child(2)",
      "label": "Adresy IP"
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
      "label":"Przekaż"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Projekt",
          "type": "choose",
          "value": "MySecondProject"
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
      "label":"Przekaż"
    }
  }
]
```

#### CLI

W celu wykonania operacji z wykorzystaniem CLI - w przypadku *Adresu IP* - wykonaj następujące polecenie:

```bash
h1 ip transfer --ip IP --new-project NEW-PROJECT
```

gdzie:

 * ```--ip``` określa nazwę lub identyfikator *Adresu IP*
 * ```--new-project``` określa identyfikator lub nazwę *Projektu*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="ip transfer"].

W przypadku potrzeby przekazania *Zasobu* dostępne są następujące polecenia:

* [CLI="ip transfer"]
* [CLI="image transfer"]
* [CLI="disk transfer"]
* [CLI="firewall transfer"]
* [CLI="iso transfer"]