# Utworzenie trwałego publicznego adresu IP

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć trwały publiczny *[Adres IP](/resource/networking/ip-address.md)*.

## Warunki wstępne

* utworzenie wymaga spełnienia [warunków utworzenia Adresu IP](/resource/networking/ip-address.md#utworzenie)

## Instrukcja

### Panel
      
W celu utworzenia *Adresu IP* poprzez panel wykonaj następujące kroki:

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
      "type": "button",
      "selector": "navbar>.vm",
      "label": "Utwórz Nowy"
    },
    "after_event": "Po kliknięciu zostanie przydzielony losowy publiczny adres IP."
  }
]
```

#### CLI

W celu utworzenia *Adresu IP* z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 ip create
```

Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="ip create"].