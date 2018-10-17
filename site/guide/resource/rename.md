# Zmiana nazwy Zasobu

## Wprowadzenie

Dokument wyjaśnia w jaki sposób zmienić nazwę *[Zasobu](/platform/resource.md)*.

## Instrukcja

#### Panel

Poniżej przedstawiono zmianę nazwy *Wirtualnej Maszyny*. Analogiczne postępowanie jest w przypadku innych zasobów.

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
      "type": "entry_tridot"
    },
    "after_event": "Po kliknięciu pojawi się okno z formularzem."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Nowa nazwa",
          "type": "text",
          "value": "MyNamedVm"
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
      "label":"Zastosuj"
    }
  }
]
```



#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 vm rename --vm MyVm --new-name MyNamedVm
```

gdzie:

 * ```--vm``` określa nazwę lub identyfikator *Wirtualnej Maszyny*
 * ```--new-name``` określa nową nazwę *Wirtualnej Maszyny*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="vm rename"].

W przypadku konieczności dodania tagów do innych typów *Zasobów* dostępne są następujące polecenia:

* [CLI="h1 snapshot rename"]
* [CLI="h1 vm rename"]
* [CLI="h1 replica rename"]
* [CLI="h1 image rename"]
* [CLI="h1 netgw rename"]
* [CLI="h1 network rename"]
* [CLI="h1 disk rename"]
* [CLI="h1 firewall rename"]
* [CLI="h1 vault rename"]
* [CLI="h1 iso rename"]
* [CLI="h1 project rename"]