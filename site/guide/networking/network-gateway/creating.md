# Utworzenie Bramy sieciowej

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć *[Bramę sieciową](/resource/networking/network-gateway.md)* zapewnia łączność z Sieci do Internetu.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie [warunki utworzenia *Bramy sieciowej*](/resource/networking/network-gateway.md#utworzenie)

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
      "label": "Bramy sieciowe"
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
          "value": "moja-brama-sieciowa"
        },
        {
          "name": "Adres IP",
          "type": "choose",
          "value": "2.181.8.31"
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
    "after_event": "Po kliknięciu przejdziesz do strony ze szczegółami nowego zasobu."
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