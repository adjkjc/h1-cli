# Utworzenie Dziennika

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć [Dziennika](/resource/storage/log-archive.md), który możesz wykorzystać do
archiwizowania logów lub ich analizy w czasie rzeczywistym.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie [warunki utworzenia *Dziennika*](/resource/storage/log-archive.md#utworzenie)

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
      "label": "Dzienniki"
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
          "value": "moj-dziennik"
        },
        {
          "name": "Przechowywanie",
          "type": "number",
          "value": "30",
          "help": "Określa przez jaki okres dane mają być przechowywane przez platforme"
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


### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 log create --name my-log --size 10
```

gdzie:

 * ```--name``` określa nazwę nowo utworzonego *Dziennika*
 * ```--size``` określa jego rozmiar

<!-- Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="log create"]. -->