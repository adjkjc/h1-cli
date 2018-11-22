# Zmiana rekordu PTR dla Adresu IP

## Wprowadzenie

Dokument wyjaśnia w jaki sposób zmienić rekord PTR w DNS dla *[Adresu IP](/resource/networking/ip-address.md)*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie warunki wykonania operacji [Powiązanie z innym adresem IP](/resource/networking/ip-address.md).

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
      "label": "Wirtualne Maszyny"
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
      "type": "tab",
      "selector": "navbar>.vm",
      "label": "Adaptery sieciowe"
    },
    "after_event": "Po kliknięciu pojawi się lista rozwijana."
  },
  {
    "action_name": "click",
    "data": {
      "type": "entry",
      "selector": "navbar>.vm",
      "label": "Zmnień rekord PTR"
    },
    "after_event": "Po kliknięciu pojawi się formularz."
  },
  {
    "action_name": "form",
    "data": {
      "modal": true,
      "steps": [
        {
          "name": "Rekord PTR",
          "type": "text",
          "value": "mail-server.company.example.com"
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
      "label": "Zmień"
    }
  }
]
```

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 ip ptr --ip 62.181.8.21 --value 'mail-server.company.example.com'
```

gdzie:

 * ```--ip``` określa adres IP lub jego identyfikator
 * ```--value``` określa wartość rekordu PTR

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="ip ptr"].