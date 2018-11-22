# Utworzenie Sieci

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć *[Sieć](/resource/networking/network.md)* wykorzystywaną do izolacji i segmentacji platformy w celu ograniczenia komunikacji zasobów.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* utworzenie wymaga spełnienia [warunków utworzenia *Sieci*](/resource/networking/network.md#utworzenie)

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
      "label": "Sieci"
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
          "value": "moje-iso"
        },
        {
          "name": "Przestrzeń adresowa",
          "type": "text",
          "value": "10.21.154.0/24"
        },
        {
          "name": "Brama domyślna",
          "type": "text",
          "value": "10.21.154.1"
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
h1 network create --name my-ip-network --address 10.214.180.0/24 --gateway 10.214.180.10
```

gdzie:

 * ```--name``` - określa nazwę nowo utworzonej *Sieci*
 * ```--address``` - określa pulę adresową *Sieci* (parametr opcjonalny)
 * ```--gateway``` - określa bramę domyślna *Sieci* (parametr opcjonalny)

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="network create"].