# Utworzenie Zapory sieciowej

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć *[Zaporę sieciową](/resource/networking/firewall.md)* wykorzystywaną do kontroli przepływu w *Sieci*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie [warunki utworzenia *Zapory sieciowej*](/resource/networking/firewall.md#utworzenie)

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
          "value": "moj-firewall"
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
h1 firewall create --name my-ip-network
```

gdzie:

 * ```--name``` - określa nazwę nowo utworzonego firewalla

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="firewall create"].