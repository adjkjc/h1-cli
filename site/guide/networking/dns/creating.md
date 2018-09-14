# Utworzenie DNS

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć *[DNS](/resource/networking/dns.md)* wykorzystywaną do tłumaczenie publicznych nazw domen na odpowiadające im wartości.

## Warunki wstępne

* utworzenie *DNS* wymaga spełnienia [warunków utworzenia DNS](/resource/networking/dns.md#utworzenie)

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
      "label": "DNS"
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
          "name": "Nazwa strefy",
          "type": "name",
          "value": "example.com."
        }
      ],
      "defined_all": false
    }
  },
  {
    "action_name": "click",
    "data": {
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Utwórz"
    },
    "after_event": "Po kliknięciu przejdziesz do strony ze szczegółami nowego zasobu.\n\nPełne wykorzystanie strefy może wymagać zmian u rejestratora domeny."
  }
]
```

#### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 dns zone create --name example.com
```

gdzie:

 * ```--name``` - określa nazwę nowo utworzonego *DNS*

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="dns create"].